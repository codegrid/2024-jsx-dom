import { h } from '@/h';

const counterWidget = () => {
  let count = 0;
  return (
    <div class='counter-widget'>
      <button
        onClick={(event: Event) => {
          count++;
          (event.target as HTMLButtonElement).textContent = count.toString();
        }}
      >
        {count}
      </button>
    </div>
  );
};
const dom = counterWidget();
document.querySelector('#counterWidget')?.appendChild(dom);
