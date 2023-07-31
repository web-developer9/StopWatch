const watching = document.getElementById("watch");
const minus = document.getElementById("minus");
const reset = document.getElementById("reset");
const hourswatch = document.getElementById("hours");
const miliseconds = document.getElementById("milisec");

let seconds = 0;
let minutes = 0;
let hours = 0;
let milisec = 0;
let stopwatch = true;
sub.addEventListener("click", function () {
  function con() {
    milisec += 1;
    if (milisec === 100) {
      seconds += 1;
      milisec = 0;
    }
    if (seconds === 60) {
      minutes += 1;
      seconds = 0;
    }
    if (minutes === 60) {
      hours += 1;
      minutes = 0;
    }
    seconds < 10
      ? (watching.textContent = "0" + seconds)
      : (watching.textContent = seconds);
    minutes < 10
      ? (minus.textContent = "0" + minutes)
      : (minus.textContent = minutes);
    hours < 10
      ? (hourswatch.textContent = "0" + hours)
      : (hourswatch.textContent = hours);
    milisec < 10
      ? (miliseconds.textContent = "0" + milisec)
      : (miliseconds.textContent = milisec);
  }
  sub.disabled = true;
  myInterval = setInterval(con, 10);
});

sto.addEventListener("click", function () {
  clearInterval(myInterval);
  stopwatch = false;
  sub.disabled = stopwatch;
});

reset.addEventListener("click", function () {
  seconds = 0;
  minutes = 0;
  milisec = 0;
  minus.textContent = minutes;
  watching.textContent = seconds;
  hourswatch.textContent = hours;
  miliseconds.textContent = milisec;
  clearInterval(myInterval);
  sub.disabled = false;
});
