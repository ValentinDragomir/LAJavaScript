alert = function() {
    var planet = document.getElementById("redplanet");
    // var planet = document.querySelector("#redplanet"); // alternativ
    planet.innerHTML = "Aliens approaching!";
    planet.style.color = "red";
}
clear = function() {
    var planet = document.getElementById("redplanet");
    planet.innerHTML = "Nothing to report!";
    planet.style.color = "black";
}
// document.querySelector("#redplanet").onclick = alert;
document.querySelector("#redplanet").onmouseover = alert;
document.querySelector("#redplanet").onmouseout = clear;