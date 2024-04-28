// 🚀 Day 48 Challenge: Start Coding! 🚀 //
//Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.
var promise = new Promise(function (resolve) {
    setTimeout(function () { resolve("Hello, World!"); }, 2000);
});
promise.then(function (message) { return console.log(message); });
//Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
// Example using Promise.all to wait for multiple promises to resolve
var promise1 = Promise.resolve(2);
var promise2 = 35;
var promise3 = new Promise(function (resolve) { setTimeout(resolve, 300, "Hello"); });
Promise.all([promise1, promise2, promise3]).then(function (values) {
    console.log(values);
});
//Question 144: Explain the use of the Promise.all() method with an example.
// Example using Promise.all to wait for multiple promises to resolve
var promise4 = Promise.resolve(5);
var promise5 = 89;
var promise6 = new Promise(function (resolve) {
    setTimeout(resolve, 100, "Hi");
});
Promise.all([promise4, promise5, promise6]).then(function (values) { console.log(values); });
