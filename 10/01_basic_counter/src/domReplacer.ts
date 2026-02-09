export const domReplacer = (component: () => HTMLElement) => {
  // コンポーネントの実行結果であるDOMをdomReplacer内で管理する
  let dom = component();

  // コンポーネントを再実行して新しいDOMを生成し、既存のDOMと置き換える関数
  function replaceDom() {
    const newDom = component();
    dom.replaceWith(newDom);
    return (dom = newDom);
  }

  function render() {
    replaceDom();
  }

  return {
    render, // 再レンダリング用の関数（DOMの置換を行う）
    dom, // 初回レンダリングで生成したDOM
  };
};
