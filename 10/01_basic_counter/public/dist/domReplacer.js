export const domReplacer = (domFactory) => {
    let dom = domFactory();
    function replaceDom() {
        const newDom = domFactory();
        dom.replaceWith(newDom);
        return (dom = newDom);
    }
    function render() {
        replaceDom();
    }
    return {
        render,
        dom,
    };
};
