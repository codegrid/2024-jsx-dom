import { h } from './h';
import { domReplacer } from './domReplacer';
import styles from './ValueDisplay.module.css';

export const ValueDisplay = ({
  valueRef,
  onInitialized,
}: {
  valueRef: { value: string };
  onInitialized: (render: () => void) => void;
}) => {
  const {dom, render} = domReplacer(() => <span>{valueRef.value}</span>);
  onInitialized(render);

  return <p class={styles.ValueDisplay}>入力値: {dom}</p>;
};
