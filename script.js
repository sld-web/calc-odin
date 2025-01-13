// Select all the buttons that should trigger an action
const buttons = document.querySelectorAll('.one, .two, .three, .four, .five, .six, .seven, .eight, .nine, .zero, .dot, .sum, .plus, .minus, .multiply, .division, .percen');

// Add event listener to all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const display = document.querySelector('.display');
        const div = document.createElement('div');
        div.innerText = button.innerText;
        display.appendChild(div);
    });
});

const clear = document.querySelector('.clear');
const display = document.querySelector('.display');
clear.addEventListener('click', function(){
    if (clear){
        display.lastElementChild.remove();
    }
})

const reset = document.querySelector('.reset');
reset.addEventListener('click', function() {
    while (display.firstChild) {
        display.removeChild(display.firstChild);  
    }
});



