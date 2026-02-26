import { h, Fragment } from './h';
import { domReplacer } from './domReplacer';
import { ButtonGroup } from './ButtonGroup';
import styles from './App.module.css';

export const App = () => {
  let count = 0;

  const counterReplacer = domReplacer(() => (
    <div class={styles._Counter}>
      <p class={styles._Count}>カウント: {count}</p>
      <p class={styles._Status}>
        {count === 0 ? 'まだカウントされていません' :
         count > 0 ? `${count}回カウントされました` :
         `${Math.abs(count)}回減らされました`}
      </p>
    </div>
  ));

  return (
    <div class={styles.App}>
      <h1 class={styles._Title}>Fragment & SVG Demo</h1>
      {counterReplacer.dom}
      <ButtonGroup
        onIncrement={() => {
          count++;
          counterReplacer.render();
        }}
        onDecrement={() => {
          count--;
          counterReplacer.render();
        }}
        onReset={() => {
          count = 0;
          counterReplacer.render();
        }}
      />
    </div>
  );
};
