import { h } from '@/h';
import styles from './CountButton.module.css';

export const CountButton = ({
  count,
  onClick,
}: {
  count: number;
  onClick: (event: Event) => void;
}) => (
  <button class={styles.CountButton} onClick={onClick}>
    {count}
  </button>
);
