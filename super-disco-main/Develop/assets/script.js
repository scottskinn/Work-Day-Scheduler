// setting the date in the header
var header = document.querySelector(".jumbotron")
var currentDay = document.createElement("currentDay")

var currentTime = moment();
currentDay.textContent = (currentTime.format('LLLL'));
console.log(currentDay);
header.appendChild(currentDay);

// assign savebtn with click listener
$(".savebtn").on("click", function(){
    console.log(this)
})



$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));