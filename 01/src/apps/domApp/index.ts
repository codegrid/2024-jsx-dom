const counterWidget = () => {
  let count = 0;

  const button = document.createElement('button');
  button.textContent = count.toString();
  button.addEventListener('click', (event: Event) => {
    count++;
    (event.target as HTMLButtonElement).textContent = count.toString();
  });

  const div = document.createElement('div');
  div.classList.add('counter-widget');
  div.appendChild(button);

  return div;
};

const dom = counterWidget();
document.querySelector('#counterWidget')?.appendChild(dom);
