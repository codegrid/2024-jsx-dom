import { h } from './h';
import styles from './IconButton.module.css';

const getIcon = (label: string) => {
  if (label === '+') {
    return (
      <svg class={styles._Icon} width="24" height="24" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="#4a90e2" stroke="#2d70c4" stroke-width="2" />
        <path d="M12 7v10M7 12h10" stroke="white" stroke-width="2" stroke-linecap="round" />
      </svg>
    );
  } else if (label === '-') {
    return (
      <svg class={styles._Icon} width="24" height="24" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="#e74c3c" stroke="#c0392b" stroke-width="2" />
        <path d="M7 12h10" stroke="white" stroke-width="2" stroke-linecap="round" />
      </svg>
    );
  } else {
    return (
      <svg class={styles._Icon} width="24" height="24" viewBox="0 0 24 24">
        <g>
          <circle cx="12" cy="12" r="10" fill="none" stroke="#27ae60" stroke-width="2" />
          <path
            d="M16 12 A5 5 0 1 1 16 11.9"
            fill="none"
            stroke="#27ae60"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path d="M16 8l0 4l-4 0" fill="#27ae60" />
        </g>
      </svg>
    );
  }
};

export const IconButton = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => {
  // 記号の場合はアイコンのみ、テキストの場合はアイコンとラベルを表示
  const showLabel = label !== '+' && label !== '-';

  return (
    <button class={styles.IconButton} onClick={onClick}>
      {getIcon(label)}
      {showLabel && <span class={styles._Label}>{label}</span>}
    </button>
  );
};
