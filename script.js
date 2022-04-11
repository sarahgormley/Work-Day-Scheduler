var currentDay = moment();
$("#currentDay").text(currentDay.format("MMM Do, YYYY"));

var currentTime = moment().hour();
console.log(currentTime)

var saveBtn = $('.btn')
var currentTime = $('.hour')

// Variables for each hour
var nineAm = document.querySelector('#hr-9');
var tenAm = document.querySelector('#hr-10');
var elevenAm = document.querySelector('#hr-11');
var twelvePm = document.querySelector('#hr-12');
var onePm = document.querySelector('#hr-1');
var twoPm = document.querySelector('#hr-2');
var threePm = document.querySelector('#hr-3');
var fourPm = document.querySelector('#hr-4');
var fivePm = document.querySelector('#hr-5');

var currentHour = (new Date()).getHours();
$('.hour')
    .each(function() {
        var val = parseInt($(this).prop('id'));
        if (val > currentHour && val < currentHour + 6) {
            $(this).css('background-color', 'Blue');
        } else if (val < currentHour && val > currentHour - 6) {
            $(this).css('background-color', 'Red');
        } else if (val === currentHour) {
            $(this).css('background-color', 'Green');
        } else {
            $(this).css('background-color', 'White');
        }
    });

// Functions for saving values for each time to local storage
nineAm.value = localStorage.getItem('9am');
tenAm.value = localStorage.getItem('10am');
elevenAm.value = localStorage.getItem('11am');
twelvePm.value = localStorage.getItem('12pm');
onePm.value = localStorage.getItem('1pm');
twoPm.value = localStorage.getItem('2pm');
threePm.value = localStorage.getItem('3pm');
fourPm.value = localStorage.getItem('4pm');
fivePm.value = localStorage.getItem('5pm');


function showPlan() {
    localStorage.setItem('9am', nineAm.value)
    localStorage.setItem('10am', tenAm.value)
    localStorage.setItem('11am', elevenAm.value)
    localStorage.setItem('12pm', twelvePm.value)
    localStorage.setItem('1pm', onePm.value)
    localStorage.setItem('2pm', twoPm.value)
    localStorage.setItem('3pm', threePm.value)
    localStorage.setItem('4pm', fourPm.value)
    localStorage.setItem('5pm', fivePm.value)
}


//On click function for save button
saveBtn.on('click', showPlan);