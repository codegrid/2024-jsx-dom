import styles from './CountButton.module.css';

export const CountButton = ({
  count,
  onClick,
}: {
  count: number;
  onClick: (event: Event) => void;
}) => {
  const dom = document.createElement('button');
  dom.textContent = count.toString();
  dom.classList.add(styles.CountButton);
  dom.addEventListener('click', onClick);
  return dom;
};
