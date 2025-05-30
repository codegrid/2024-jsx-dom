export const h = (element: any, attributes: any, ...children: any) => {
  const el = document.createElement(element);
  for (const attrName in attributes) {
    const attrValue = attributes[attrName];
    el.setAttribute(attrName, attrValue);
  }
  el.append(...children);
  return el;
};
