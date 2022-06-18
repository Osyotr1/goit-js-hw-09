

let timerId = null;

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.body;
const goBack = body.firstElementChild;

const divBox = document.createElement("div")


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







// DIV STYLES
divBox.style.display = 'flex';
divBox.style.justifyContent = 'center';
divBox.style.paddingTop = '20%';
divBox.style.paddingBottom = '25%';
goBack.after(divBox);
divBox.append(btnStart, btnStop);

// START STYLES
btnStart.style.padding = '10px 15px';
btnStart.style.marginRight = '10px';
btnStart.style.font = '15px Roboto'

// STOP STYLES
btnStop.style.padding = '10px 15px';
btnStop.style.marginRight = '10px';
btnStop.style.font = '15px Roboto'