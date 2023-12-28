document.write('<h1>BASIC CALCULATOR</h1>')
const plus = document.getElementById('plus');
const sub = document.getElementById('sub');
const mul = document.getElementById('mul');
const div = document.getElementById('div');

function Operands(num1,num2){
    let ch = parseInt(prompt("Enter the choice"))
    switch(ch){
        case 1:
            let add =  parseInt(num1+num2);
            console.log(`Add : ${add}`);
            break;
        case 2:
            let sub =  parseInt(num1-num2);
            console.log(`Sub : ${sub}`);
            break;
        case 3:
            let mul =  parseInt(num1*num2);
            console.log(`Mul : ${mul}`);
            break;
        case 4:
            let div =  parseInt(num1/num2);
            console.log(`Div : ${div}`);
            break;
        default:
            console.log(`invalid choice`)

    }
    
}
