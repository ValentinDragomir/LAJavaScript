var scores = [78, 56, 19, 45, 89, 24, 10, 45, 98, 46];
var fruits = ["portocale", "mandarine", "mere", "nuci", "banane", "kiwi"];

var max = 0;
var position;

for(var i = 0; i < scores.length; i++) {
    if(scores[i] > max) {
        max = scores[i];
        position = i;
    }
}

document.write(max + " bule pe pozitia " + position);
document.write("<br>");

max = fruits[0];

for(var i = 0; i < fruits.length; i++) {
    if(fruits[i] > max) {
        max = fruits[i];
        position = i;
    }
}

document.write("Cele mai mari fructe sunt " + max);