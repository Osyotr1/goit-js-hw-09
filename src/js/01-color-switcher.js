

let timerId = null;

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');


btnStop.disabled = true;

btnStart.addEventListener('click', () => {
    disabeStartBtn();   
    timerId = setInterval(() => {
      document.body.style.backgroundColor = `${getRandomHexColor()}`
    }, 1000);
    console.log(btnStart);
});

btnStop.addEventListener('click', () => {
    disableStopBtn(); 
    clearInterval(timerId);
});


function disabeStartBtn() {
    btnStart.disabled = true;
    btnStop.disabled = false;
}

function disableStopBtn() {
    btnStop.disabled = true;
    btnStart.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}







