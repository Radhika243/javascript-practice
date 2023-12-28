/*1*/ 
// let power = 666;
// function man(){
//     power = 10;
//     console.log(`Man's power is : ${power}`);
// }

// function bat(spider){
//     var power = 30;
//     try{
//         spider();
//     }catch(e){
//         power = 20;
//     }
//     console.log(`Bat's power is : ${power}`);
// }
// function spider(){
//     bat(man)
// }
// spider();

//output
// Man's power is : 10
// Bat's power is : 30

/*2*/
// class Person{
//     constructor(friends){
//         this.friends=friends;
//     }
// }

// class Employee extends Person{
//     constructor(friends){
//         super(friends)
//     }
//     displayFriends(){
//         for(let friend of friends){  //friends not defined, but this.friends works fine
//             console.log(friend)
//         }
//     }
// }

// let friendList = ['Aadya','Nishanth','Manish','John'];
// let x = new Employee(friendList);
// x.displayFriends();

// var str = "The best things3 are free in life";
// var pattern = new RegExp("[a-z]+[0-9]");
// var result = pattern.exec(str);
// console.log(result);

//[
//     'things3',
//     index: 9,
//     input: 'The best things3 are free in life',
//     groups: undefined
//   ]


// var i = 666;
// function myFunc(){
//     for(var i=1;i<10;i++){ //10 , var and let doesn't make any difference
//         console.log(i)
//     }
// }

// myFunc()

// const result = [];
// function check(par1,...par2){
//     return result.push(par1,par2);
// }
// console.log(check("Hello","World"));  // 2 (push returns new array length)


// function bat(man,maxPower){
//     power = maxPower;
//     try{
//         man();
//     }finally{
//         power = 400;
//     }
//     console.log(power);  // 400
// }

// function man(){
//     try{
//         throw new Error();
//         power = 100;
//     }catch(e){
//         power = 200;
//     }finally{
//         power = 300;
//     }
// }

// bat(man,100);


// function emailFormat(email){
//     try{
//         if(email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)){
//             console.log(`email matched`);
//             return true;
//         }
//         else{
//             throw new Error("Error invalid");
//         }
//     }catch(error){
//         console.log(error.message);
//     }finally{
//         console.log("Finally block")
//     }
// }
// console.log(emailFormat("hello.123@example.com"))

// email matched
// Finally block
// true


// function bat(man,maxPower){
//         power = maxPower;
//         try{
//             man();
//         }finally{
//             let power = 400; // when the flow reaches here it will be undefined
//         }
//         console.log(power);  // 300
//     }
    
//     function man(){
//         try{
//             throw new Error();
//             power = 100;
//         }catch(e){
//             power = 200;
//         }finally{
//             power = 300;
//         }
//     }
    
//     bat(man,100);

// let power = 666;
// function man(){
//     power = 10;
//     console.log(`Man's power is : ${power}`);
// }

// function bat(spider){
//    power = 30;
//     try{
//         spider();
//     }catch(e){
//         power = 20;
//     }
//     console.log(`Bat's power is : ${power}`);
// }
// function spider(){
//     bat(man)
// }
// spider();

// Man's power is : 10
// Bat's power is : 10


// let i = 666;
// function myFunc(){
//     for(let i=1;i<10;i++){ //10 , var and let doesn't make any difference
//         console.log(i)
//     }
// }
// myFunc()

// function test(){
    
//     console.log(a);
//     console.log(foo());  // if we place var a =1 on top, then it will return 1
//     var a = 1;// otherwise undefined
// }
// function foo(){
//     return 2;
// }
// test()



// function man(){
//     power = 10;
//     console.log(`Man's power is : ${power}`);
// }

// function bat(spider){
//     var power = 30;
//     try{
//         spider();
//     }catch(e){
//         power = 20;
//     }
//     console.log(`Bat's power is : ${power}`);
// }
// function spider(){
//     bat(man)
// }
// spider();

// Man's power is : 10
// Bat's power is : 30

// const myFunction = () => console.log("Hello") ||"World"; // along with Hello world undefined will be printed if console.log is added to world
// let returnValue = myFunction();
// console.log(returnValue); // Hello World


// function spider(man){
//     console.log("spider");
//     return man;
// }

// function man(){
//     console.log("Man");
// }

// function bat(man){
//     console.log("Bat");
//     spider(man)();
// }
// bat(man);   // Bat Spider Man

// counts = [1,2,3,4];
// newcount = counts.map(_=>Math.pow(_,2));
// console.log(counts);  // 1,2,3,4
// console.log(newcount); //1,4,9,16


// var myList = ["Edison","Tesla","Einstein"];
// var [,a]= myList;
// document.write(a);  // Tesla

// var lis = [
//     {alterEgo : 'Bruce wayne', city:'Gotham City'},
//     {alterEgo : 'Oliver Queen', city:'Star City'},
//     {alterEgo : 'Barry Allen', city:'Central City'},
// ];

// var[,,darkKnight] = lis;
// function cityHunter({alterEgo : x, heroName: y, powers : k, city:z}){
//     document.write(x+ '-' +y+'-'+k+'-'+z);
// }
// cityHunter(darkKnight)  //Barry Allen-undefined-undefined-Central City



// var x,y;
// var chr='';
// for(x=1; x <=5; x++)
// {
//    for (y=1; y <= x; y++)
//      {
//      if(y%2!=0){
//         chr=chr+("*");
//      }
//      else{
//          chr=chr+("#")
//      }
         
//       }
//  console.log(chr);
//  chr='';    
// }


// for(var x=1;x<=5;x++){
//     for(var y=1;y<=5;y++){
//         console.log(" " +y)
//     }
// }


//pattern priniting
// function generateNumber(num){
//     let pattern = '';
//     for(let i=1;i<=num;i++){
//         for(let j=1;j<=i;j++){
//             pattern += i;
//         }
//         pattern +='\n';
//     }

//     return pattern;
// }

// console.log(generateNumber(5))

// if i print "i" : 
// 1
// 22
// 333
// 4444
// 55555

// if i print "j":
// 1
// 12
// 123
// 1234
// 12345

// function validateTravellerPassword(password) {
//     for (i = 0; i < password.length; i++) {
//     }
// }

// function validateTravellerName(name) {
//     console.log(i);
//     for (i = 0; i < name.length; i++) {
//         console.log(i)
//     }
// }

// validateTravellerPassword("12345");
// validateTravellerName("Jack");

// function findAverageMarks(score){
//     const Total = score.reduce((acc,curVal)=>
//         acc + curVal,0);
//     const average = Total/score.length;

//     const aboveAvg = score.filter(scores => scores > average).length;
//     const percentage = (aboveAvg / score.length) * 100;

//     return percentage;
// }

// console.log([1,2,3,4,5,7,5])

// let myArray = ["oooooooooooooooooooooooooo", "iOS", "Windows", "Linux","uuyytewdfhhj"];

// let result = myArray.findIndex(element => element.length > 5);

// console.log(result) //0
// function check_palindrome(str){
//     let original=str;
//     let palindrome= str.split('').reverse().join('');
//     if(original === palindrome){
//         console.log(`the str ${str} is palindrome`);
//         return true;
//     }else{
//         console.log(`the str ${str} is not palindrome`);
//         return false;
//     }
     
    
// }
// console.log(check_palindrome("MADAM"))

// Write a JavaScript code to process name as the sample below.

// Sample Input: Rama Krishna Narayan

// Sample Output: R. K. Narayan

// function processInitial(inputString){
//     let splitInputString = inputString.split('');
//     console.log(`input : ${splitInputString}`)
//     let initialName = `${splitInputString[0][0]} ${splitInputString[1][0]} ${splitInputString[2]}`;
//     console.log(`before return : ${initialName}`)
//     return initialName;
// }

// let inputString = "Rama Krishna Narayan";
// let outputString = processInitial(inputString);
// console.log(`output : ${outputString}`)

// function processInitial(inputName){
//     let nameParts = inputName.split('');
//     let firstName = nameParts[0];
//     let lastName = nameParts.slice(1).map((part => part[0].charAt(0))).join('');
//     let output = `${firstName} ${lastName}`;
//     return output;
// }
// let inputName = "Rama Krishna Narayan";
//  let outputString = processInitial(inputName);
// console.log(`output : ${outputString}`)

// Write a JavaScript function to extract unique characters from a string. 


// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"

// let str1 = "thequickbrownfoxjumpsoverthelazydog";
// let splitStr = str1.split('');
// let newStr = [...new Set(splitStr)].join('')
// console.log(newStr)


// Write a JavaScript program to display the current day and time in the following format.  


// Sample Output : 
// Today is : Tuesday. 
// Current time is : 10 PM : 30 : 38

// let newDate = new Date()
// let day = newDate.getDay()
// let daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// console.log(`Today is : ${daysOfWeek[day]}`)  // Thursday

// let time = newDate.toLocaleTimeString()
// console.log(`Current time is : ${time}`)  //3:40:26 PM


// Write a JavaScript function checkDate() to check if a given date is in the correct format or not.

// Correct date format: "MM-DD-YYYY" (for example: 03-18-2018)

// If the date format is as above, the function should print true else it should print false.

// Sample Input: 19-12-1995

// Sample Output: False


// function checkDate(date){
//     if(date){
//     date = new Date("MM-DD-YY")
//     return true
//     }else{
//         return false
//     }
// }

// console.log(checkDate("19-12-1995"))


// let dateInput = "2019/05/15"; // YYYY/MM/DD format

// let dateObj = new Date(dateInput);

// if (!isNaN(dateObj)) {
//   let day = dateObj.getDate();
//   day = day < 10 ? "0" + day : day;
//   let month = dateObj.getMonth() + 1;
//   month = month < 10 ? "0" + month : month;
//   const year = dateObj.getFullYear();

//   const resultDate = `${day}/${month}/${year}`;
//   console.log(resultDate);  // 15/05/2019
// }

// function checkDate(dateInput){                         /////////////need to checkkkkkkkkkkkkkk
//     //const datePattern = /^(0[1-9]|1[0-2])-(0[1-9|1\d|2\d|3[01]])-(19|20)\d{2}$/;
//     const datePattern=/^(0[1-9]|1[0-2])-(0[1-9][12][0-9]3[01])-(19|20)\d\d$/;
//     return datePattern.test(dateInput)
// }

// console.log(checkDate("12-19-1995"));


// Write a JavaScript code to formulate date for a specified date after given 'n' number of days.

// Sample Input:16th Jul, 2018 and n=30

// Sample output:15th August, 2018

// Note: Don't forget to account for leap years!

// function addExtraDaysBasedOnValue(inputDate,n){
//     let newDate = new Date(inputDate);
//     newDate.setDate(newDate.getDate() + n);

//     let day = newDate.getDate();
//     let month = newDate.toLocaleString('default',{
//         month:'long'
//     })
//     let year = newDate.getFullYear()

//     return `${day}th ${month}, ${year}`;
// }

// const resultDate = addExtraDaysBasedOnValue("02-28-2024",2);
// console.log(resultDate)

// function addExtraYearsBasedOnInput(inputDates,y){
//     let curDate = new Date(inputDates);
//     curDate.setFullYear(curDate.getFullYear() + y)

//     let day = curDate.getDate();
//     let month = curDate.toLocaleString('default',{
//         month:'numeric'
//     })
//     let year = curDate.getFullYear();

//     return `${day}-${month}-${year}`;
// }

// const resultYear = addExtraYearsBasedOnInput("03-12-2000",6);
// console.log(resultYear)

// let materials = [ { element: "Hydrogen" }, { element: "Helium" } ]; console.log( materials.map((element) => { 
//     return { element, state: "gas" }; 
//     }) );

//     let elements = [{ gas: "Hydrogen" }, { gas: "Helium" }, { gas: "Boron" }];

// console.log(elements.filter((element) => element.gas.length != 5));

// Write a JavaScript program to list the properties of a JavaScript object.


// Sample object: 
// var student = { 
// name : "David Rayy", 
// sclass : "VI", 
// rollno : 12 

// };


// Sample Output: David Rayy, VI, 12

var student = {
    "name": "David Rayy",
    "sclass": "VI",
    "rollno": 12
}
 //1st approach
// const values = Object.values(student);
// console.log(JSON.stringify(values))

//2nd approach
// for(let value in student){
//     console.log(`${student[value]}`)
// }

// David Rayy
// VI
// 12


// Write a JavaScript to code to get the following output in console from the JSON object.

// Expected Output: xyz Mobile shipped a Moto G5+ worth 14900 with productId: 1000.

// Note: The JSON object contains the following JSON:

// var mobJson='{"productId":1001,"product":{"name":"Moto","series":"G5+","color":"NightSky"},"price":14900,"category":"Electronics","shippingDetails":{"shipmentNo":"1DEL009","company":"Intel Marketing","receivedOn":"2018-6-19"},"seller":{"name":"xyz Mobile","location":"New York","stock":17}}'

// var mobJson='{"productId":1001,"product":{"name":"Moto","series":"G5+","color":"NightSky"},"price":14900,"category":"Electronics","shippingDetails":{"shipmentNo":"1DEL009","company":"Intel Marketing","receivedOn":"2018-6-19"},"seller":{"name":"xyz Mobile","location":"New York","stock":17}}'
// console.log(JSON.parse(mobJson));

// {
//     productId: 1001,
//     product: { name: 'Moto', series: 'G5+', color: 'NightSky' },
//     price: 14900,
//     category: 'Electronics',
//     shippingDetails: {
//       shipmentNo: '1DEL009',
//       company: 'Intel Marketing',
//       receivedOn: '2018-6-19'
//     },
//     seller: { name: 'xyz Mobile', location: 'New York', stock: 17 }
//   }


// Write a JavaScript program to search a date within a string.

// Sample Input: "Albert Einstein was born in Ulm, on 14/03/1879."

// Sample Output:14/03/1879.

// const dateRegexp1 = /^(0[1-9]|[12][0-9]|[3[01])$/  --- need to do
// const input = "Albert Einstein was born in Ulm, on 14/03/1879."
// console.log(input.search(dateRegexp1))


// Write a pattern that matches e-mail addresses. Syntax: localpart@domain

// Note: The local part ( The text before @ symbol ) contains the following ASCII characters.

// Uppercase (A-Z) and lowercase (a-z) English letters.

// Digits (0-9).

// Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~

// Character . (dot) provided that it is not the first or last character and it will not come one after the other.

// Sample Input	Sample Output
// JohnDoe.12#4@gmail.com	"Matches the pattern"
// John..Doe12#4@gmail.com	"Not matching"

// JohnDoe.12#4@gmail.com

// let emailRegex = /^([A-Za-z0-9!#$%&'*+-/=? ^_`{|}~])+[\.][A-Za-z0-9!#$%&'*+-/=? ^_`{|}~]+@[a-z]+\.(com|in)$/;


// function EmailValidation(email,pattern){
//     //pattern = /^([A-Za-z0-9!#$%&'*+-/=? ^_`{|}~])+[\.][A-Za-z0-9!#$%&'*+-/=? ^_`{|}~]+@[a-z]+\.(com|in)$/;
//     if(email.match(pattern)){
//         console.log("pattern matched")
//     }else{
//         console.log("pattern didn't match")
//     }
// }
// // var email = "JohnDoe..12#4@gmail.com";
// var pattern =  /^(([A-Za-z0-9!#$%&'*+-/=?^_`{|}~]))+@[a-z]+\.(com|in)$/;
// EmailValidation("JohnDoe..12#4@gmail.in",pattern) // need to check for .. validations


// let myArray = ["Android", "iOS", "Windows"];

// console.log(myArray.push("Linux"));

// console.log(myArray);

// let myArray = ["IOS","OP","Windows","Android", "iOS", "Windows", "Linux"];

// let result = myArray.findIndex(element => element.length > 5); //returns the first element which satisfies the condition

// console.log(result); //Android


// let myArr = [];
// for (i = 0; i < 3; i++) {
//     myArr.push(function () {
//         console.log(i);
//     })
// }
// for (j = 0; j < 3; j++) {
//     myArr[j]();    // 3 3 3
// }


// var myPromise = new Promise(function (resolve, reject) {
// 	setTimeout(function () {
// 		resolve("success");
// 	}, 2000);
// });
// myPromise.then(
// 	function (data) {
// 		console.log(data + " received in 2 seconds");
// 	},
// 	function (error) {
// 		console.log(error);
// 	}
// );


doSomething().then(function (result) {
	return doSomethingElse(result);
})
	.then(function (newResult) {
		return doThirdThing(newResult);
	})
	.then(function (finalResult) {
		console.log("Print the final result " + finalResult)
	})
	.catch(failureCallBack);

 