export const getFocusHandler = (node) => {
    return (selector, cursorPosition = 0) => {
        const target = node.querySelector(selector) ||
            node.parentElement?.querySelector(selector);
        if (!target)
            return;
        target?.focus();
        if (cursorPosition) {
            target?.setSelectionRange(cursorPosition, cursorPosition);
        }
    };
};
