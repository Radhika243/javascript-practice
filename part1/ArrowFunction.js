//console.log(this) // {}

// function thisFunc(){
//     //console.log(this)       // Getting the global objects
//     let username = "hitesh";
//     //console.log(this.username)  //undefined
// }
// thisFunc()

//Immediately invoked function expression (IIFE)
(function chai(){
    console.log(`DB Connected`)
})();// ; --> plays a important role . if we miss this ; then we will be getting error

(function chai(){
    console.log(`DB Connected1`)
})()
