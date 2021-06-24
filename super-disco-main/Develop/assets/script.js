// setting the date in the header
var header = document.querySelector(".jumbotron")
var currentDay = document.createElement("currentDay")

var currentTime = moment();
currentDay.textContent = (currentTime.format('LLLL'));
console.log(currentDay);
header.appendChild(currentDay);


