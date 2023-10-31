const marvel_heros = ["thor","Ironman","spiderman"];
const dc_heros = ["superman","flash","batman"];

// console.log(marvel_heros.push(dc_heros)) // returns new length of the array and considers dc_heros as a single element in the array
// console.log(marvel_heros)                //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

//console.log(marvel_heros.concat(dc_heros))      //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
//console.log(marvel_heros.join())                //thor,Ironman,spiderman

const combineArray = [...marvel_heros,...dc_heros]
//console.log(combineArray)                           //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const arr1 = [1,2,3,4,5,[6,7,8,[9,10,11,12],[13,14,15]]];           //[
                                                                        //     1,  2,  3,  4,  5,  6,
                                                                        //     7,  8,  9, 10, 11, 12,
                                                                        //    13, 14, 15
                                                                        //  ]
const retFlatArray = arr1.flat(Infinity);
//console.log(retFlatArray);

// console.log(Array.isArray("Hanuman"));          //false
// console.log(Array.from("Hanuman"));         //['H','a','n','u','m','a','n']
// console.log(Array.from({name : "Ram"}))     //[] --> Array.from won't work for object

let score1 = 100;
let score2 = 200;
let score3 = 300;
//console.log(Array.of(score1,score2,score3))         //[100,200,300]



