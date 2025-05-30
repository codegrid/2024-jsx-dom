import { sanitize } from './sanitize';

export const h = (element: any, attributes: any, ...children: any) => {
  // 属性値の文字列化
  const attributeItems = [];
  if (attributes) {
    for (const key in attributes) {
      attributeItems.push(
        `${key}="${sanitize(attributes[key])}"` // ★サニタイズ処理
      );
    }
  }
  const attributesString = attributeItems.join(' ');

  // 子要素の文字列化
  const childrenHtml = children.join('');

  // HTML文字列の整形
  return `<${element} ${attributesString}>${childrenHtml}</${element}>`;
};
