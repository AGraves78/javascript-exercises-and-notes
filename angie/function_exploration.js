/*jshint esversion: 6 */
// Let's talk about functions

// So what are functions?
// It is a way of bundling a piece
// of repetitive code into a reusable


// Named function declarations - available anywhere in this file
function launchTheMissiles(){
  console.log('Launch the missiles');
}
// Our first function
function square(num){
  // launchTheMissiles();// this is bad!
  return num * num;
}

const squareOfTwo = square(2);
//console.log(num); //doesn't exist outside the function
                  //variables are encased in functions
console.log('squareOfTwo', squareOfTwo);



// console.log('Cube of 2 before: ', cube(2)); //BROKE! Variable not defined here
// assign function to variables
const cube = function cube(num){
  return num * num * num;
};
// const cubeFatArrow = (num) => {
//   return num * num * num;
// };
// Alternatively
const cubeFatArrow = (num) => num * num * num;

console.log('Cube of 2 after: ', cube(2));
console.log('cubeFatArrow of 2: ', cubeFatArrow(2));




















//
