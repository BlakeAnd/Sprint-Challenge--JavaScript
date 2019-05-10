// ==== Callbacks ====  
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}
function summer(summed){
  console.log("the sum is ", summed);
}
sumNums(11, 4, summer);
/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
//solution 1
/*
function consume(a, b, callb){
  callb(a + b);
}
function consume1(a, b, callb){
  callb(a * b);
}
function consume2(a, b, callb){
  callb(`Hello ${a} ${b}, nice to meet you!`);
}
function add(sum) {
  console.log(sum);
  return sum;
}
function multiply(product) {
  console.log(product);
  return product;
}
function greeting(phrase) {
  console.log(phrase);
  return phrase;
}
*/

//solution 2
function add(a, b, cb){
  cb(a + b);
}
function multiply(a, b, cb) {
  cb(a* b);
}
function greeting(a, b, cb) {
  cb(`Hello ${a} ${b}, nice to meet you!`);
}
function consume(pass){
  console.log(pass);
  return pass;
}
/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
/*
function add(sum) {
  console.log(sum);
  return sum;
}
function multiply(product) {
  console.log(product);
  return product;
}
function greeting(phrase) {
  console.log(phrase);
  return phrase;
}
*/

/* Step 3: Check your work by un-commenting the following calls to consume(): */
//solution 1
/*
consume(2,2,add); // 4
consume1(10,16,multiply); // 160
consume2("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!
*/

//solution 2
add(2,2,consume); // 4
multiply(10,16, consume); // 160
greeting("Mary","Poppins", consume); // Hello Mary Poppins, nice to meet you!

// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: a function can access any variable created outside of it.


const external = "I'm outside the function";

function myFunction() {
  //console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    //console.log(internal);
  };
  nestedFunction();
}
myFunction();