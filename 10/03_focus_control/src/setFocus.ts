export const setFocus = (
  node: HTMLElement,
  selector: string,
  cursorPosition: number = 0
) => {
  const target =
    node.querySelector(selector) ||
    node.parentElement?.querySelector(selector);
  if (!target) return;

  (target as any)?.focus();
  if (cursorPosition) {
    (target as any)?.setSelectionRange(cursorPosition, cursorPosition);
  }
};
