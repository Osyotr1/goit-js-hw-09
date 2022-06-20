import Notiflix from 'notiflix';

const delay = document.querySelector('[name = "delay"]');
const step = document.querySelector('[name = "step"]');
const amount = document.querySelector('[name = "amount"]');
const form = document.querySelector('.form');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  let delayInput = +(delay.value);
  let amountInput = +(amount.value);
  let stepInput = +(step.value);

  if (delayInput > 0 && amountInput > 0 && stepInput >= 0) {
    for (let i = 1; i <= amountInput; i += 1) {
      createPromise(i, delayInput)
        .then(value => {
          Notiflix.Notify.success(value);
        })
        .catch(error => {
          Notiflix.Notify.warning(error);
        });
      delayInput += stepInput;
    }
  }
});


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

    return new Promise((resolve, reject) =>{
      setTimeout(() => {
        if (shouldResolve) {
          resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);          
        } else {
          reject(`❌ Rejected promise ${position} in ${delay}ms`);
        }
      }, delay);
    });
}
