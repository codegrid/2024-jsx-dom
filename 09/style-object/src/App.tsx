import { AppDialog } from './AppDialog.js';
import { h } from './h.js';

const App = () => {
  let dialogDom = <dialog />;
  return (
    <div>
      <button
        onClick={() => {
          dialogDom.showModal();
        }}
      >
        Open Dialog
      </button>
      {
        (dialogDom = (
          <AppDialog maxWidth='600px' paddingInline='100px'>
            Dialog
          </AppDialog>
        ))
      }
    </div>
  );
};
const dom = App();
document.body.append(dom);
