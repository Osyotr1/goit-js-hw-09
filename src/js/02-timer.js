import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"

const body = document.querySelector('body')
const daysUI = document.querySelector('[data-days]');
const hoursUI = document.querySelector('[data-hours]');
const minutuesUI = document.querySelector('[data-minutes]');
const secondsUI = document.querySelector('[data-seconds]');
body.style.paddingLeft = '100px';

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
          window.alert("Please choose a date in the future")
          return;
      } else {
          targetDate = selectedDates[0];
          startBtn.disabled = false;
      }
  },
};

const fp = flatpickr("#datetime-picker", options);



function timerFn() {
    timerId = setInterval(() => {
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
    number = num.toString();
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