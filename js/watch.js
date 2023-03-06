// Get the DOM element for the watch
const watch = document.getElementById("watch");

// Set the interval to update the time every second
setInterval(() => {
  // Get the current time
  const now = new Date();

  // Format the time as hh:mm:ss
  const time = `${formatDigit(now.getHours())}:${formatDigit(now.getMinutes())}:${formatDigit(now.getSeconds())}`;

  // Update the watch with the current time
  watch.textContent = time;
}, 1000);

// Function to format a single digit as two digits (e.g. 1 as "01")
function formatDigit(digit) {
  return digit < 10 ? `0${digit}` : digit;
}
