var button = document.querySelector("input");
var element = document.getElementById("time");

// var showTime = function() { // alternativ
    // var date = Date();
    // document.getElementById("time").innerText = date;
function showTime() {
    element.innerText = Date();
}
function changeStyle() {
    // element.style.color = "red";
    element.className = "newStyle";
}

// showTime(); // alternativ
// button.onclick = showTime;
// button.onclick = changeStyle;
// button.onclick = function() { // alternativ
//     showTime();
//     changeStyle();
// }

button.addEventListener("click", showTime);
button.addEventListener("click", changeStyle);

// button.removeEventListener("click", changeStyle);