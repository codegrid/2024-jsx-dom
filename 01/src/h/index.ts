import type { Attribute, Children, Child, ElementName } from './types';
import { booleanAttrs, svgElementNames } from './constants';

const appendChildren = (
  target: DocumentFragment | HTMLElement | SVGElement,
  children: Children
) => {
  const append = (child: Child) =>
    child === null ||
    child === undefined ||
    typeof child === 'boolean' ||
    target.append(child);
  children.forEach((child) =>
    Array.isArray(child) ? child.forEach(append) : append(child)
  );
};

export const Fragment = (_: Attribute, children: Children) => {
  const fragment = document.createDocumentFragment();
  appendChildren(fragment, children);
  return fragment;
};

export const h = (
  elementName: ElementName,
  attributes: Attribute,
  ...children: Children
): HTMLElement | SVGElement => {
  if (typeof elementName === 'function') {
    return elementName(attributes, children);
  }

  const el = svgElementNames.has(elementName)
    ? document.createElementNS('http://www.w3.org/2000/svg', elementName)
    : document.createElement(elementName);

  for (const key in attributes) {
    if (/^on[A-Z][a-z]/.test(key)) {
      const eventName = key.slice(2).toLowerCase();
      el.addEventListener(eventName, attributes[key]);
    } else if (booleanAttrs.has(key)) {
      if (attributes[key] === true) el.setAttribute(key, 'true');
    } else {
      const value = attributes[key];
      if (![null, undefined].includes(value)) {
        el.setAttribute(key, attributes[key]);
      }
    }
  }
  appendChildren(el, children);
  return el;
};
