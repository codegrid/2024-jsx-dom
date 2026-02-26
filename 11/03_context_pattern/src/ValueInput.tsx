import { h } from './h';
import { injectInputDisplaySync } from './useInputDisplaySync';
import styles from './ValueInput.module.css';

export const ValueInput = () => {
  // コンテキストの取得
  const selfCtx = injectInputDisplaySync();

  const dom = (
    <input
      class={styles.ValueInput}
      value={selfCtx.inputValue} // コンテキストから値を参照
      onKeyup={(e: KeyboardEvent) => {
        if (e.isComposing) return;
        selfCtx.updateInputValue(dom.value); // 値を更新
      }}
    />
  ) as HTMLInputElement;
  return dom;
};
