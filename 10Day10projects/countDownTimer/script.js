const daysEl = document.getElementById("days");
const hourEl = document.getElementById("hours");
const minEl = document.getElementById("min");
const secEl = document.getElementById("sec");

const newYears = "9 Sep 2022";
function countDown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  const totalSec = (newYearsDate - currentDate)/1000;
  const days = Math.floor(totalSec/3600 /24);
  const hours = Math.floor(totalSec/3600)%24;
  const min = Math.floor(totalSec/60)%60;
  const seconds = Math.floor(totalSec)%60;

   daysEl.innerHTML = days;
   hourEl.innerHTML = formatTime(hours);
   minEl.innerHTML = formatTime(min);
   secEl.innerHTML = formatTime(seconds);
}
function formatTime(time) {
  return time<10 ? `0${time}`: time;
}
countDown();
setInterval(countDown,1000);