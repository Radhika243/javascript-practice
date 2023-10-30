const myArray = [1,2,3,4,5,6,7,8,9,10,20,30,45,10,46];
const concatArray = [12,12,14,15,16]

myArray.push(11)
myArray.pop()
myArray.push(0)
myArray.unshift(9)       //adds the num to first index
myArray.shift()     //removes first indexs of the array
const conarr = myArray.concat(concatArray)
//console.log(conarr)

const incNum = myArray.includes(6)
//console.log(incNum)                 //true

const entryArray = myArray.entries()
//console.log(entryArray.next().value)  //[0,1]  --> 0-- index 1 -- value

const findLastElement = myArray.findLast((elem) => elem > 40)  // Last element present in the array which is mentioned at last
//console.log(findLastElement)   --> 46
//console.log(myArray.indexOf(45));

//console.log(myArray.join())         //1,2,3,4,5,6,7,8,9,10,20,30,45,10,46,0

//console.log("A",myArray)                //A [
                                                //     1,  2,  3,  4,  5,  6,
                                                //     7,  8,  9, 10, 20, 30,
                                                //    45, 10, 46,  0
                                                //  ]
const myArray1 = myArray.slice(1,3)
// console.log(myArray1)  // [2,3]
// console.log("B",myArray)  // B is same as A

//console.log(myArray)

console.log("A",myArray)
const myArray2 = myArray.splice(1,3) // 2,3,4
console.log(myArray2)
console.log("C", myArray) //[
                            //     1,  5,  6,  7,  8,  9,
                            //    10, 20, 30, 45, 10, 46,
                            //     0
                            //  ]