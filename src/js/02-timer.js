import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"
import Notiflix from 'notiflix';

const body = document.querySelector('body')
const daysUI = document.querySelector('[data-days]');
const hoursUI = document.querySelector('[data-hours]');
const minutuesUI = document.querySelector('[data-minutes]');
const secondsUI = document.querySelector('[data-seconds]');
const divBox = document.querySelector('.timer');



const startBtn = document.querySelector('button[data-start');
startBtn.disabled = true;
startBtn.addEventListener('click', timerFn);

let targetDate = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      if (selectedDates[0] < options.defaultDate) {
          Notiflix.Notify.warning("Please choose a date in the future")
          return;
      } else {
          targetDate = selectedDates[0];
          startBtn.disabled = false;
      }
  },
};

const fp = flatpickr("#datetime-picker", options);



function timerFn() {
    startBtn.disabled = true;
    const timerId = setInterval(() => {
        const deltaTime = targetDate - Date.now();
        if (deltaTime < 0) {
            clearInterval(timerId);
            return;
        }
        setTimeInterface(deltaTime);
    }, 1000)
};


function setTimeInterface(time) {
    daysUI.textContent = addLeadingZero(convertMs(time).days)
    hoursUI.textContent = addLeadingZero(convertMs(time).hours)
    minutuesUI.textContent = addLeadingZero(convertMs(time).minutes)
    secondsUI.textContent = addLeadingZero(convertMs(time).seconds)

}

function addLeadingZero(num) {
    let number = num.toString();
    return number.padStart(2, '0');
    
}




function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
    

};



//STYLES
body.style.paddingLeft = '100px';
divBox.style.font = "bold 30px Sans-serif"
divBox.style.display = "flex";
divBox.style.justifyContent = 'center';
divBox.style.marginTop = '50px';
hoursUI.style.marginLeft = '50px';
minutuesUI.style.marginLeft = '50px';
secondsUI.style.marginLeft = '50px';
