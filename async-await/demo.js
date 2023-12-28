// returns a resolved promise value after asynchronous task completed 
// function asyncJob(x) {
// 	return new Promise(resolve => resolve(x + 1));
// }
// // we are linking series of three asynchronous tasks 
// async function execAsyncJobs() {
// 	/*await stops the execution of 'execAsyncJobs', until the promise returned by'asyncJob(0)', is resolved.  
// res1 assigned with resolved promise’s result value */
// 	const res1 = await asyncJob(0);
// 	console.log(res1);
 
// 	/* here,'asyncJob(res1)'is called, await stops execution of'execAsyncJobs', until the promise returned by'asyncJob(res1)' is resolved.  
// res2 assigned with resolved promise’s result value  */
// 	const res2 = await asyncJob(res1);
// 	console.log(res2);
// 	/* here, asyncJob(res2) is called, await stops execution of execAsyncJobs until the promise returned by asyncJob(res2) is resolved.  
// res3 assigned with resolved promise’s result value */
// 	const res3 = await asyncJob(res2);
// 	console.log(res3);
// 	return "Jobs completed";
// }
// execAsyncJobs().then(res => console.log(res)); 


// Simulating a periodic stock price change and displaying on the console.

// Approach to the solution:

// Create a method which returns a random number - use Math.random, floor and other methods to return a rounded value.

// Invoke the method for every three seconds and stop when the count is 5 – use the setInterval method.

// Since setInterval is an async method, enclose the code in a Promise and handle the response generated in a success callback.

// The random value returned from the method every time can be used as a stock price and displayed on the console.
function generateRandomNumber(){
	return Math.round(Math.random() * 100) + 1;
}

//set the counter value to 0
let counter = 1;

return new Promise(function(resolve,reject){
	const interval = setInterval(function(){
		counter++;
		
		console.log(`Counter set Interval : ${generateRandomNumber()}`)
		
		if(counter == 5){
			
			clearInterval(interval);
			resolve("success")
			console.log(`stopped at 5`)
		}
		
	},3000);
}).then(data=>{
	console.log(data)
})
