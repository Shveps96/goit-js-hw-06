let counterValue = 0;

function increment() {
  counterValue += 1;
  document.querySelector('#value').textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  document.querySelector('#value').textContent = counterValue;
}

const incrBtn = document.querySelector(
  '#counter button[data-action="increment"]',
);
const decrBtn = document.querySelector(
  '#counter button[data-action="decrement"]',
);

incrBtn.addEventListener('click', increment);
decrBtn.addEventListener('click', decrement);