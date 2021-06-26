// setting the date in the header
var header = document.querySelector(".jumbotron")
var currentDay = document.querySelector("#currentDay")
var description = document.querySelector(".description")

var currentTime = moment();
currentDay.textContent = (currentTime.format('LLLL'));
header.appendChild(currentDay);

// assign savebtn with click listener
$(".saveBtn").on("click", function(){   

    var text = $(this).siblings(".description").val();  
    var time = $(this).parent().attr("id");
    
    localStorage.setItem(time, text);    
});

$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));


// var h14 = document.getElementById("hour14")
//     if (currentHour === h14) {
//     h14.classList.add("present");
//     }

// // change the time block color based on hour
// function hourTracker() {
//     var currentHour = moment().format('H');
    

//     // for each time block run the following statment 
//     $(".time-block").each(function() {
//         var blockH = parseInt($(this).attr("id").split("hour")[1])

//     if (blockH === currentHour) {
//         $("#hour14").addClass("present");        
//         $("#hour14").removeClass("future");
//         $("#hour14").removeClass("past");

//     }
// }
//     );
//     // hourTracker();
// };

function hourTracker() {
    //get current number of hours.
    var currentHour = moment().hour();

    // loop over time blocks
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
        // console.log( blockHour, currentHour)

        //check if we've moved past this time
        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
hourTracker();
