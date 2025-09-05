import { h } from './h.js';

export const AppDialog = (
  { maxWidth, paddingInline }: { maxWidth?: string; paddingInline?: string },
  children: any
) => {
  return (
    <dialog
      class='AppDialog'
      style={{
        '--_max-width': maxWidth,
        '--_padding-inline': paddingInline,
      }}
    >
      <div class='_Content'>{children}</div>
    </dialog>
  );
};
