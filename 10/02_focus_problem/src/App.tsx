import { h } from './h.js';
import { domReplacer } from './domReplacer.js';
import styles from './App.module.css';

export const App = () => {
  let inputValue = '';

  const appReplacer = domReplacer(() => {
    const inputDom = (
      <input
        class={styles._Input}
        value={inputValue}
        onKeyup={(e: KeyboardEvent) => {
          if (e.isComposing) return; // IME入力中は無視
          inputValue = inputDom.value;
          appReplacer.render();
        }}
      />
    );
    return (
      <div class={styles.App}>
        {inputDom}
        <p class={styles._Output}>入力値: {inputValue}</p>
      </div>
    );
  });

  return appReplacer.dom;
};
