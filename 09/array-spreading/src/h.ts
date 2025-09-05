import { styleFormat } from './styleFormat.js';

export const h = (element: any, attributes: any, ...children: any) => {
  if (typeof element === 'function') {
    return element(attributes || {}, children);
  }
  const el = document.createElement(element);
  for (const attrName in attributes) {
    const attrValue = attributes[attrName];
    // イベントハンドラの割り当て
    if (/^on[A-Z][a-z]/.test(attrName) && typeof attrValue === 'function') {
      const eventName = attrName.slice(2).toLowerCase();
      el.addEventListener(eventName, attrValue);
    }
    // boolean型の属性処理
    else if (typeof attrValue === 'boolean') {
      if (attrValue) {
        el.setAttribute(attrName, '');
      }
    }
    // class属性が配列の場合の処理
    else if (attrName === 'class' && Array.isArray(attrValue)) {
      el.setAttribute(
        'class',
        attrValue.filter((v) => typeof v === 'string').join(' ')
      );
    }
    // 属性割り当て処理
    else {
      const justifiedValue =
        attrName === 'style' ? styleFormat(attrValue) : attrValue;
      if (justifiedValue !== undefined) {
        el.setAttribute(attrName, justifiedValue);
      }
    }
  }
  // 多次元配列のフラット化
  // el.append(...children.flat(Infinity));
  el.append(...children.flat());
  return el;
};
