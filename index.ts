            // 🚀 Day 48 Challenge: Start Coding! 🚀 //
//Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.
let  promise = new Promise<string>((resolve) => {
    setTimeout(() => { resolve("Hello, World!") }, 2000);
  });
  promise.then((message) => console.log(message));
  

//Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
// Example using Promise.all to wait for multiple promises to resolve
let promise1 = Promise.resolve(2);
let promise2 = 35;
let promise3 = new Promise<string>((resolve) => { setTimeout(resolve, 300,"Hello") });
Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); 
});

//Question 144: Explain the use of the Promise.all() method with an example.
// Example using Promise.all to wait for multiple promises to resolve
const promise4 = Promise.resolve(5);
const promise5 = 89;
const promise6 = new Promise<string>((resolve) => { setTimeout(resolve, 100,"Hi");
});
Promise.all([promise4, promise5, promise6]).then((values) => {console.log(values);});


