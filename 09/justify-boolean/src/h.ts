export const h = (element: any, attributes: any, ...children: any) => {
  if (typeof element === 'function') {
    return element(attributes || {}, children);
  }
  const el = document.createElement(element);
  for (const attrName in attributes) {
    const attrValue = attributes[attrName];
    if (/^on[A-Z][a-z]/.test(attrName) && typeof attrValue === 'function') {
      const eventName = attrName.slice(2).toLowerCase();
      el.addEventListener(eventName, attrValue);
    } else if (typeof attrValue === 'boolean') {
      if (attrValue) {
        el.setAttribute(attrName, '');
      }
    } else {
      el.setAttribute(attrName, attrValue);
    }
  }
  el.append(...children);
  return el;
};
