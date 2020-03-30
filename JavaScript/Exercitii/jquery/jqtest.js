$('input.first').click(changeButton);
$('input.second').click(styleButton);

// document.querySelector('input').addEventListener('click', changeButton); // (native JavaScript alternative)

function changeButton() {
    let newElem = $('<span>Hello world</span>');
    $('div').slideToggle()
            .html(newElem);
    // $('div').text('You clicked!');

    // document.querySelector('div').style.visibility = 'hidden';
}
function styleButton() {
    $('div').css({
        'background-color': 'lightblue',
        'top': '30vh'
    });
    
    // document.querySelector('div').style.backgroundColor = 'lightblue';
}