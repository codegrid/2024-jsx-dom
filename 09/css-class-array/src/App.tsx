import { AppButton } from './AppButton.js';
import { h } from './h.js';

const App = () => {
  return (
    <div>
      <AppButton>button</AppButton>
      <AppButton isPrimary={true}>primary</AppButton>
    </div>
  );
};
const dom = App();
document.body.append(dom);
