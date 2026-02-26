import { h } from './h';
import { domReplacer } from './domReplacer';
import { injectInputDisplaySync } from './useInputDisplaySync';
import styles from './ValueDisplay.module.css';

export const ValueDisplay = () => {
  // コンテキストの取得
  const selfCtx = injectInputDisplaySync();

  // 表示部分のDOMとrender関数を取得
  const {dom, render} = domReplacer(() => <span>{selfCtx.inputValue}</span>);

  // render関数をコンテキストに登録
  selfCtx.setValueDisplayRender(render);

  return <p class={styles.ValueDisplay}>入力値: {dom}</p>;
};
