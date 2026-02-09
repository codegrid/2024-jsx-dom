import { setFocus } from './setFocus.js';

export const domReplacer = (domFactory: () => HTMLElement) => {
  let dom = domFactory();

  function replaceDom() {
    const newDom = domFactory();
    dom.replaceWith(newDom);
    return (dom = newDom);
  }

  function render() {
    // DOMを書き換える前にフォーカスしていた要素のidとselectionStartを記録
    const id = document.activeElement?.id;
    const selectionStart = (document.activeElement as any)?.selectionStart;
    const newDom = replaceDom();

    // 新しいDOM内に記録したidを持つ要素があればフォーカスする
    if (id) {
      setFocus(newDom, `#${id}`, selectionStart);
    }
  }

  return {
    render,
    dom,
  };
};
