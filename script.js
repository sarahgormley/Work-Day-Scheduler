var currentDay = moment();
$("#currentDay").text(currentDay.format("MMM Do, YYYY"));

var currentTime = moment().hour();
var saveBtn = $('.btn')


var currentHour = (new Date()).getHours();


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
    var input = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, input)
    console.log(input)
    console.log(time)
});