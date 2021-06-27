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

// Trying to make the textarea draggable to delete

// this makes the ul elements sortable
$("#draggable").sortable({
    connectWith: $(".list")
    
  });

//   $( function() {
//     $( "#draggable" ).draggable({ cursor: "move", cursorAt: { top: 56, left: 56 } });
//   });

//   const draggable = document.querySelector("#draggable");

//   draggable.addEventListener("dragstart", e =>{
//       console.log(e)
//   })

$("#trash").droppable ({
    accept: "#draggable",
    tolerance: "touch",
    drop: function(event, ui) {
      console.log("drop");
    },
    over: function(event, ui) {
      console.log("over");
    },
    out: function(event, ui) {
      console.log("out");
    }
  })