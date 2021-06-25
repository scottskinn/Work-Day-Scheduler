// setting the date in the header
var header = document.querySelector(".jumbotron")
var currentDay = document.querySelector("#currentDay")
var description = document.querySelector(".description")

var currentTime = moment();
currentDay.textContent = (currentTime.format('LLLL'));
header.appendChild(currentDay);

// assign savebtn with click listener
$(".container .savebtn").on("click", function(){
    console.log(localStorage);

    var text = $(this).siblings(".description").value;  
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);


$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));
});


// Set each timeblock in the daily schedule using moment.js
var hour9 = moment().hour(9);
var hour10 = moment().hour(10);
var hour11 = moment().hour(11);
var hour12 = moment().hour(12);
var hour13 = moment().hour(13);
var hour14 = moment().hour(14);
var hour15 = moment().hour(15);
var hour16 = moment().hour(16);
var hour17 = moment().hour(17);

// change the time block color based on hour
function hourTracker() {
    var currentHour = moment().format('H');

    if (currentHour === (hour9)) {
        $("#hour9").addClass("present");
        } else {        
        $("#hour9").addClass("future");
        $("#hour9").addClass("past");
    }

    hourTracker();
};