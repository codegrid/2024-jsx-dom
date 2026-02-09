import { setFocus } from './setFocus.js';

export const domReplacer = (component: () => HTMLElement) => {
  let dom = component();

  function replaceDom() {
    const newDom = component();
    dom.replaceWith(newDom);
    return (dom = newDom);
  }

  function render() {
    // DOMを書き換える前にフォーカスしていた要素のidとselectionStartを記録
    const id = document.activeElement?.id;
    const selectionStart = (document.activeElement as any)?.selectionStart || 0;
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
