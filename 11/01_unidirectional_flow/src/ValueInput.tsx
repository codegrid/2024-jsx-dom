import { h } from './h';
import styles from './ValueInput.module.css';

export const ValueInput = ({
  value,
  onInput,
}: {
  value: string;
  onInput: (value: string) => void;
}) => {
  const dom = (
    <input
      class={styles.ValueInput}
      value={value}
      onKeyup={(e: KeyboardEvent) => {
        if (e.isComposing) return;
        onInput(dom.value);
      }}
    />
  ) as HTMLInputElement;
  return dom;
};
