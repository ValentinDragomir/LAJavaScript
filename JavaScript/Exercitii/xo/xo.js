document.querySelectorAll('td')
        .forEach(cell => cell.addEventListener("click", onClick));

var symbol = 'X'; 
function onClick(event) {
    let cell = event.target;
    cell.removeEventListener("click", onClick);
    cell.innerText = symbol;
    symbol = symbol == 'X' ? '0' : 'X';
}