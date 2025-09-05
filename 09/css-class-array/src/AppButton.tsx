import { h } from './h.js';

export const AppButton = (
  { isPrimary }: { isPrimary?: boolean },
  children: any
) => {
  return (
    <button class={['AppButton', isPrimary && '_Primary']}>{children}</button>
  );
};
