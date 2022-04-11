var currentDay = moment();
$("#currentDay").text(currentDay.format("MMM Do, YYYY"));

var saveBtn = $('.btn')
var currentTime = $('.hour')
var planInput = document.querySelector('.description');

planInput.value = localStorage.getItem('content');

function showPlan() {
    localStorage.setItem('content', planInput.value)
}



//On click function for save button
saveBtn.on('click', showPlan);