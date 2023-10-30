const gameName = new String('hitesh-ch');
// console.log(gameName[0]);               //h
// console.log(gameName.__proto__)         //{}
// console.log(gameName.length)        //8
// console.log(gameName.charAt(6));  // negative won't work -- at index 6 which character is present
// console.log(gameName.indexOf('e'))  // 3
// console.log(gameName.replace("ch","rc")) //ch replaced with rc
// console.log(gameName.slice(1,3))  // it
// console.log(gameName.toUpperCase())  //HITESHCH
// console.log(gameName.concat(" Youtube"))
//console.log(gameName.substring(1,5)) // ites
//console.log(gameName.substr(1,6))  -- deprecated
//console.log(gameName.split("-"))   //[ 'hitesh', 'ch' ]
console.log(gameName.valueOf())


const sentence = "Hi Very Good evening. Enjoy Javascript Learning";
const index = 5;
//console.log(`the sentence is ${sentence.charCodeAt(index)} is at index ${sentence.charAt(index)}`)  //output : the sentence is 114 is at index r
//charcodeAt gives the ascii value of the index number passes using charAt method (returns unicode values)

//console.log(`sentence : ${sentence.charCodeAt(4)}`)   //sentence : 101

//console.log(sentence.codePointAt(5))        //r -- 114 -- gives unicode characters from the given index (non-negative)

//console.log(sentence.includes("ood"));      // true or false value (true is output)

//console.log(sentence.lastIndexOf('e'))  //40 -- > this gives the output where the e is present at last position of the sentence

const paragraph = 'The quick brown fox jumps Over the lazy dog. It barked.';
// const regex = /[A-Z]/g;
// const matchWord = paragraph.match(regex);
// console.log(matchWord)                      //[ 'T', 'O', 'I' ]


const stringObj = new String('foo');

//console.log(stringObj);
// Expected output: String { "foo" }

//console.log(stringObj.valueOf());
// Expected output: "foo"











