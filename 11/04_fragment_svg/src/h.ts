// SVG要素名のリスト
const svgElementNames = new Set([
  'svg',
  'rect',
  'circle',
  'ellipse',
  'line',
  'polyline',
  'polygon',
  'path',
  'image',
  'text',
  'defs',
  'g',
  'symbol',
  'use',
]);

// 子要素を追加するヘルパー関数
const appendChildren = (
  target: DocumentFragment | HTMLElement | SVGElement,
  children: any[],
) => {
  const append = (child: any) => {
    if (child === null || child === undefined || typeof child === 'boolean') {
      return;
    }
    target.append(child);
  };
  children.forEach((child) =>
    Array.isArray(child) ? child.forEach(append) : append(child),
  );
};

// Fragment コンポーネント
export const Fragment = (_: any, children: any[]) => {
  const fragment = document.createDocumentFragment();
  appendChildren(fragment, children);
  return fragment;
};

export const h = (element: any, attributes: any, ...children: any) => {
  if (typeof element === 'function') {
    return element(attributes || {}, children);
  }

  // SVG要素の場合は createElementNS を使用
  const el = svgElementNames.has(element)
    ? document.createElementNS('http://www.w3.org/2000/svg', element)
    : document.createElement(element);

  for (const attrName in attributes) {
    const attrValue = attributes[attrName];

    if (/^on[A-Z][a-z]/.test(attrName) && typeof attrValue === 'function') {
      const eventName = attrName.slice(2).toLowerCase();
      el.addEventListener(eventName, attrValue);
    } else if (attrValue !== null && attrValue !== undefined) {
      el.setAttribute(attrName, attrValue);
    }
  }

  appendChildren(el, children.flat(Infinity));
  return el;
};
