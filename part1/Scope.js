function one(){
    const username = " Hanuman "
    function two (){
        const website = " Youtube"
        //console.log(username)  //Hanuman
    }//
    // console.log(website)  --> first error
    // two()  --> no output
    
}
one()


if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        //console.log(username + website)
    }
    // console.log(website)   -- error
}
// console.log(username)  -- error

let val1 = null ?? undefined;
// console.log(val1) //undefined

let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 2, "a", "b", "c");
// console.log(arrayIntegers3)
// console.log(arrayIntegersOriginal3)

// const firstOrderFunc = () => console.log ('Hello, I am a First order function');
// const higherOrder = ReturnFirstOrderFunc => ReturnFirstOrderFunc();
// higherOrder(firstOrderFunc);

// What is a first class function
// In Javascript, functions are first class objects. First-class functions means
// when functions in that language are treated like any other variable.
// For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can
// be assigned as a value to a variable. For example, in the below example,
// handler functions assigned to a listener
// const handler = () => console.log ('This is a click handler function');
// document.addEventListener ('click', handler);

// What is a first order function
// First-order function is a function that doesn’t accept another function as
// an argument and doesn’t return a function as its return value.
// const firstOrder = () => console.log ('I am a first order function!');
// ff Back to Top
// 13.
// What is a higher order function
// Higher-order function is a function that accepts another function as an
// argument or returns a function as a return value or both.
// const firstOrderFunc = () => console.log ('Hello, I am a First order function');
// const higherOrder = ReturnFirstOrderFunc => ReturnFirstOrderFunc();
// higherOrder(firstOrderFunc);


function somemethod() {
    console.log(counter1); // undefined
    //console.log(counter2); // ReferenceError
    var counter1 = 1;
    console.log(counter1);
    let counter2 = 2;
    }

//somemethod()

// let uri = "employeeDetails?name=john&occupation=manager";
// let encoded_uri = encodeURI(uri);
// let decoded_uri = decodeURI(encoded_uri);
// console.log(encoded_uri);
// console.log(decoded_uri);
    

// What is a callback function
// A callback function is a function passed into another function as an argument. This function is invoked inside the outer function to complete an
// action. Let’s take a simple example of how to use callback function
function callbackFunction(name) {
console.log('Hello ' + name);
}
function outerFunction(callback) {
let name = prompt('Please enter your name.');
callback(name);
}
outerFunction(callbackFunction);