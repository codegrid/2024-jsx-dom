import { h } from './h';
import styles from './ValueDisplay.module.css';

export const ValueDisplay = ({ value }: { value: string }) => {
  return <p class={styles.ValueDisplay}>入力値: {value}</p>;
};
