function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter the username")
        return;
    }
    return `${username} logged in successfully`;
}

//console.log(loginUserMessage("Ram")); // if we don't pass the parameter, then will get the output as
                                        //Please enter the username
                                        //undefined logged in successfully So in order to  resolve this adding return keyword in the if block

function calculateCartPrice(val1,val2,...num1){
    return num1
}

//console.log(calculateCartPrice(100,200,300,400,500)) // [ 300, 400, 500 ] --> output

const myArray = [1,2,3,4,5]
function returnSecondValue(getArray){
    return getArray[1]
}
//output : 2
//console.log(returnSecondValue(myArray)) // Here we need to pass the declared array not the array directly


// console.log(returnNum())         //ReferenceError: Cannot access 'returnNum' before initialization
// const returnNum = function(val){
//     return val + 1
// }

// console.log(returnNum(5))

// console.log(returnNum(7))
function returnNum(num){
    return num + 2
}
// console.log(returnNum(10))

