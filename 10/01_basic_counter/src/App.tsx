import { h } from './h.js';
import { domReplacer } from './domReplacer.js';
import styles from './App.module.css';

export const App = () => {
  let count = 0;

  const appReplacer = domReplacer(() => (
    <div class={styles.App}>
      <p class={styles._Count}>カウント: {count}</p>
      <button class={styles._Button} onClick={() => {
        count++;
        appReplacer.render();
      }}>
        +1
      </button>
    </div>
  ));

  return appReplacer.dom;
};
