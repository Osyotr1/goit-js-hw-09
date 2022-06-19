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
    setInterval(() => {
        const deltaTime = targetDate - Date.now();
        const timeValue = convertMs(deltaTime);
        setTimeInterface(timeValue);
        console.log(timeValue);
    }, 1000)
};


function setTimeInterface(time) {
    daysUI.textContent = addLeadingZero(`${convertMs(time).days.value}`)
    hoursUI.textContent = addLeadingZero(`${convertMs(time).hours.value}`)
    minutuesUI.textContent = addLeadingZero(`${convertMs(time).minutes.value}`)
    secondsUI.textContent = addLeadingZero(`${convertMs(time).seconds.value}`)

}

function addLeadingZero(Number) {
    const num = Number.toString();
    if (num.length < 2) {
        'num'.padStart(2, '0')
    }
    return 
}






// function onStartCountdown() {
//     timerId = setInterval(() => {
//         ms = Date.parse(fp.selectedDates[0]) - Date.now()
//         days.textContent = addLeadingZero(`${convertMs(ms).days}`)
//         hours.textContent = addLeadingZero(`${convertMs(ms).hours}`)
//         minutes.textContent = addLeadingZero(`${convertMs(ms).minutes}`)
//         seconds.textContent = addLeadingZero(`${convertMs(ms).seconds}`)
//         if (ms <= 1000) {
//            clearInterval(timerId)
//         }
//     }, 1000)
// }













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