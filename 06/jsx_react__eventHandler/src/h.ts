export const h = (element: any, attributes: any, ...children: any) => {
  const el = document.createElement(element);
  for (const attrName in attributes) {
    const attrValue = attributes[attrName];
    if (/^on[A-Z][a-z]/.test(attrName) && typeof attrValue === 'function') {
      const eventName = attrName.slice(2).toLowerCase();
      el.addEventListener(eventName, attrValue);
    } else {
      el.setAttribute(attrName, attrValue);
    }
  }
  el.append(...children);
  return el;
};
