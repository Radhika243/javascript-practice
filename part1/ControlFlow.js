const userEmail = "h@gmail.com";
// if(!userEmail){
//     console.log('hi')
// }else{
//     console.log(`hello`) // output : hello (if ! is used in the if case then else case will execute)
// }
//console.log(userEmail.length)
// if(userEmail.length){
//     console.log(`email is empty`)
// }
 let myId = [];
if(myId.length === 0){
    // console.log(`empty`)
}else{
    // console.log(`not empty`)
}


let myObj = {}
if(Object.keys(myObj).length === 0){
    // console.log(`empty obj`);
}else{
    // console.log(`not empty obj`)
}


// console.log(false == 0);    //true
// console.log(0 == '');       //true
// console.log(false == '')    //true


//Nullish Coalescing operator (??) : best to use when we are getting null and undefined 
let value1;
//value1 = 10 ?? 15 // 10
//value1 = null ?? undefined  // undefined
// value1 = null ?? 12;
// console.log(value1)


for(let i=0;i<10;i++){
    const elem = i;
    // console.log(elem)
}

for(let i=1;i<=10;i++){
    //console.log(`outer loop : ${i}`);
    for(let j=1;j<=10;j++){
        //console.log(`inner loop : ${j} and outer loop : ${i}`);
        //console.log(`${i} * ${j} = ${i*j}`)

    }
}

let myArray = ["hello","Good","evening"]
for(let i=0;i<myArray.length;i++){
    const elem = myArray[i]
    // console.log(elem)

}