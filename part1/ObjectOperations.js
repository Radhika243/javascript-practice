const person = {
    isHuman : false,
    printContent : function (){
        //console.log(`Person name - ${this.name} and is he/she is Human ? - ${this.isHuman}`)
    }
};

const obj1 = Object.create(person);
obj1.name = "Roshni"
obj1.isHuman = true;

obj1.printContent()         // Person name - Roshni and is he/she is Human ? - true 



//{
//     name: 'Hitesh',
//     age: 18,
//     location: 'Bangalore',
//     email: 'abc@gmail.com',
//     isLoggedIn: false,
//     lastLoginDays: [ 'Monday', 'Saturday' ],
//     [Symbol(key1)]: 'myKey1'
//   }
const mySym = Symbol("key1");
const JSUser  = {
    name : "Hitesh",
    age : 18,
    location : "Bangalore",
    [mySym] : "myKey1",
    email : "abc@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

//console.log(JSUser)
//Object.freeze(JSUser);   --> after this freeze method no other console logs will be executed
JSUser.age = 12;
//console.log(JSUser.age)


//object 2 +++++++++++++++++++++++++++++++++++++++++++++++
const tinderUser = new Object()
// console.log(tinderUser)

const tinderUser1 = {}
tinderUser.id = 10;
tinderUser.name = "Ram"
// console.log(tinderUser1)


const object1 = {1 :"a",2:"b"}
const object2 = {3:"c",4:"d"}
const object4 = {5:"e",6:"f"}

const object3 = {object1,object2}
//console.log(object3)                    //{ object1: { '1': 'a', '2': 'b' }, object2: { '3': 'c', '4': 'd' } } -- But we don't want this kind of nesting inside the objects
                                        //so better use the spread operator and assign the value to target

const object5 = {...object1,...object2,...object4}
const object6 = Object.assign({},object5)
//console.log(object6)                        //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const users = [
    {
        id : 1,
        email : "g@gmail.com"
    },
    {
        id : 2,
        email : "h@gmail.com"
    },
    {
        id : 3,
        email : "k@gmail.com"
    },
    {
        id : 4,
        email : "j@gmail.com"
    },
];

//console.log(users[2].email)
// console.log(Object.keys(tinderUser))            //[ 'id', 'name' ]
// console.log(Object.values(tinderUser))          //[ 10, 'Ram' ]
// console.log(Object.entries(tinderUser))         //[ [ 'id', 10 ], [ 'name', 'Ram' ] ]

//console.log(tinderUser.hasOwnProperty('id'))       //true


//Destructuring the objects
const course = [
    {
        courseName : "Java in hindi",
        courseInstructor : "Ram",
        price : 999
    },
    {
        courseName : "JS in English",
        courseInstructor : "Ram",
        price : 999
    },
    {
        courseName : "OS in hindi",
        courseInstructor : "Ram",
        price : 999
    },
    {
        courseName : "C++ in hindi",
        courseInstructor : "Ram",
        price : 999
    },
];

const {courseInstructor} = course
console.log(courseInstructor)  // getting as undefined need to check



