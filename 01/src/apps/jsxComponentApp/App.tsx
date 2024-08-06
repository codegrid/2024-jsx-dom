import styles from './App.module.css';
import { h } from '@/h';
import { CountButton } from './CountButton';

export const App = () => {
  let count = 0;
  return (
    <div class={styles.App}>
      <CountButton
        count={count}
        onClick={(event: Event) => {
          count++;
          (event.target as HTMLButtonElement).textContent = count.toString();
        }}
      />
    </div>
  );
};
