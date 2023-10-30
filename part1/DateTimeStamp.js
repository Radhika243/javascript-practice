let myDate = new Date()
//console.log(typeof myDate)  // object 2023-10-30T15:13:10.680Z

// console.log(myDate.getTime())   //1698678873248
// console.log(myDate.getFullYear())           //2023
// console.log(myDate.getMonth())  //9 (month starts from 0)
// console.log(myDate.getDay()) //0-sun 1-mon


// console.log(myDate.toString())  //Mon Oct 30 2023 21:00:15 GMT+0530 (India Standard Time)
// console.log(myDate.toISOString())   //2023-10-30T15:30:40.851Z
// console.log(myDate.toUTCString())   //Mon, 30 Oct 2023 15:31:14 GMT
// console.log(myDate.getHours())  //21

let myCreatedDate = new Date(2023,0,15) //2023-01-13T18:30:00.000Z
//console.log(myCreatedDate)

// console.log(myCreatedDate.getTime())
// console.log(myCreatedDate.toDateString())   //Sat Jan 14 2023
// console.log(myCreatedDate.getDay()) //6

//To convert to seconds
//console.log(Math.floor(Date.now()/1000))      //1698680247

// const localeDate = myCreatedDate.toLocaleString('default',{
//     weekday:"long",
//     timeZone:"UTC"
// })

// console.log(localeDate)


