// Var for accessing current date via Moment.js and displaying it in currentday ID
var currentDay = moment();
$("#currentDay").text(currentDay.format("MMM Do, YYYY"));

// Var for accessing current time in hours (as a number) via Moment.js
var currentTime = moment().format('h');
console.log(currentTime)

// Var for save button
var saveBtn = $('.btn')

//Function to change the color if each time block depending on whether it matches the currenttime or is before/after
$(".time-block").each(function() {
    var hourTime = $(this).attr("id").split("-")[1];
    if (hourTime == currentTime) {
        $(this).css("background-color", "rgb(255, 251, 149)");
    } else if (hourTime > currentTime) {
        $(this).css("background-color", "rgb(238, 187, 255)");

    }

})

// Function for getting values from local storage and placing them back in the textarea (#description) of each hour
$("#hr-9 .description").val(localStorage.getItem("9"));
$("#hr-10 .description").val(localStorage.getItem("10"));
$("#hr-11 .description").val(localStorage.getItem("11"));
$("#hr-12 .description").val(localStorage.getItem("12"));
$("#hr-1 .description").val(localStorage.getItem("1"));
$("#hr-2 .description").val(localStorage.getItem("2"));
$("#hr-3 .description").val(localStorage.getItem("3"));
$("#hr-4 .description").val(localStorage.getItem("4"));
$("#hr-5 .description").val(localStorage.getItem("5"));



//Function for saving text input to local storage when save button is clicked. 
// Had to use sibling and parent rule as accessing the ID directly wouldnt work. 
// Using this formula also gets a number for each hour to match the current hour of the day
saveBtn.on('click', function(event) {
    var time = $(this).parent().attr("id").split("-")[1];
    var input = $(this).siblings(".description").val();
    localStorage.setItem(time, input)
});