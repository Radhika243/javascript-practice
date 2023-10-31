//for in // for of 
const myObject = { //for in loop is used for object iteration
    js : "javascript",
    cpp : "c++",
    swift: "swift by apple"
}

for (const obj in myObject) {
    const elem = obj;
    console.log(elem)
}