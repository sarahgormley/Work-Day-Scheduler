// Var for accessing current date via Moment.js and displaying it in currentday ID
var currentDay = moment();
$("#currentDay").text(currentDay.format("MMM Do, YYYY"));

// Var for accessing current time in hours (as a number) via Moment.js
var currentTime = moment().format('H');
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

    } else if (hourTime < currentTime) {
        $(this).css("background-color", "#c1ffbf");

    }

})

// Function for getting values from local storage and placing them back in the textarea (#description) of each hour
$("#hour-9 .description").val(localStorage.getItem("9"));
$("#hour-10 .description").val(localStorage.getItem("10"));
$("#hour-11 .description").val(localStorage.getItem("11"));
$("#hour-12 .description").val(localStorage.getItem("12"));
$("#hour-13 .description").val(localStorage.getItem("13"));
$("#hour-14 .description").val(localStorage.getItem("14"));
$("#hour-15 .description").val(localStorage.getItem("15"));
$("#hour-16 .description").val(localStorage.getItem("16"));
$("#hour-17 .description").val(localStorage.getItem("17"));



//Function for saving text input to local storage when save button is clicked. 
// Had to use sibling and parent rule as accessing the ID directly wouldnt work. 
// Using this formula also gets a number for each hour to match the current hour of the day
saveBtn.on('click', function(event) {
    var time = $(this).parent().attr("id").split("-")[1];
    var input = $(this).siblings(".description").val();
    localStorage.setItem(time, input)
});