// Select all the buttons that should trigger an action
const buttons = document.querySelectorAll('.one, .two, .three, .four, .five, .six, .seven, .eight, .nine, .zero, .dot, .sum, .plus, .minus, .multiply, .division, .percen');
let user = '';
let user2 = '';
let first = 0;
let operator = '';
let second = 0;
// Add event listener to all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const display = document.querySelector('.display');
        const div = document.createElement('div');
        div.innerText = button.innerText;
        display.appendChild(div);
        if (div.innerText !== '='){
        if (div.innerText >= '0' && div.innerText <= '9' || div.innerText === '.' ) {
            if (operator) {
                user2 += div.innerText; 
                second = Number(user2);
            } else {
                user += div.innerText; 
                first = Number(user);
            }
        } else{
            operator = div.innerText;
        }}
        console.log(first);
        console.log(operator);
        console.log(second);
        
        
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
    user = '';
    user2 = '';
    first = 0;
    second = 0;
    result = 0;
});

function add (a,b){
    return a+b;
}

function substraction (a,b){
    return a-b;
}

function multiply (a,b){
    return a*b;
}

function division (a,b){
    return a/b;
}

function percentage (a,b){
    return a*b/100;
}
const equals = document.querySelector('.sum'); // Make sure you have a button with class 'equals'
equals.addEventListener('click', function() {
    let result;
     switch (operator){
        case '+':
            result = add(first,second);
            break;
        case '-':
            result = substraction(first,second);
            break;
        case 'x':
            result = multiply(first,second);
            break;
        case '/':
            result = division(first,second);
            break;
        case '%':
            result = percentage(first,second);
            break;
        default:
            return 'error';
}
    while (display.firstChild) {
        display.removeChild(display.firstChild);  
    }
    const div = document.createElement('div');
    div.innerText = result;
    display.appendChild(div);
    first = result;
    second = 0;
    user2 = '';
console.log(result);
});





