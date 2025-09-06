var hour = document.getElementById("hour");
var min = document.getElementById("min");
var sec = document.getElementById("sec");
var mer = document.getElementById("mer");
var mont = document.getElementById("mont");
var dte = document.getElementById("dte");
var day = document.getElementById("day");
var year = document.getElementById("year");


function format(unit) {
    return unit < 10 ? ("0" + unit) : unit;
}

function setTime() {
    var date = new Date();

    if (date.getHours() > 12) {
        hour.innerText = format(date.getHours() - 12);
    } else if (date.getHours() === 0) {
        hour.innerText = "12";
    } else {
        hour.innerText = format(date.getHours());
    }


    min.innerText = format(date.getMinutes());
    sec.innerText = format(date.getSeconds());

    if (date.getHours() >= 12) {
        mer.innerText = "PM";
    } else {
        mer.innerText = "AM";
    }
};

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function setDate() {
    var date = new Date();

    day.innerText = days[date.getDay()];
    dte.innerText = format(date.getDate());
    mont.innerText = months[date.getMonth()];
    year.innerText = date.getFullYear();
};

setInterval(() => {
    setTime();
}, 1000);

setTime()
setDate()


