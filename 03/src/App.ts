import styles from './App.module.css';
import { CountButton } from './CountButton';

export const App = () => {
  let count = 0;
  const appDom = document.createElement('div');
  appDom.classList.add(styles.App);
  appDom.appendChild(
    CountButton({
      count: 0,
      onClick: (event: Event) => {
        count++;
        (event.target as HTMLButtonElement).textContent = count.toString();
      },
    })
  );
  return appDom;
};
