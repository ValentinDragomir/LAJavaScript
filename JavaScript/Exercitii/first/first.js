var name = "Valentin";
var message = "\"Hello " + name + "!\"";
var timeout = 3000;
var isNight = false;
var isMorning = false;
var nothing = null;

var date = new Date();
var hour = date.getHours();

// hour = 0

if(hour == 0) {
    alert("Happy new year!");
} else if(hour >= 20 || hour <= 6) {
    alert("Good night!");
    alert("Sweet dreams!");
} else if(hour <= 11) {
    alert("Good morning!");
} else if(hour <= 17) {
    alert("Good day!");
} else {
    alert("Good evening!");
}

setTimeout(sayHello, timeout);
function sayHello() {
    // alert(message);
    console.log(message);
}