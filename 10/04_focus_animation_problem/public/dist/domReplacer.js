import { getFocusHandler } from './getFocusHandler.js';
export const domReplacer = (domFactory) => {
    let dom = domFactory();
    function replaceDom() {
        const newDom = domFactory();
        dom.replaceWith(newDom);
        return (dom = newDom);
    }
    function render() {
        // DOMを書き換える前にフォーカスしていた要素のidとselectionStartを記録
        const id = document.activeElement?.id;
        const selectionStart = document.activeElement?.selectionStart;
        const newDom = replaceDom();
        // 新しいDOM内に記録したidを持つ要素があればフォーカスする
        const focus = getFocusHandler(newDom);
        if (id && focus) {
            focus(`#${id}`, selectionStart);
        }
    }
    return {
        render,
        dom,
    };
};
