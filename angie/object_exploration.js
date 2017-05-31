/* jshint esversion: 6*/
// Let's create a Car
// Properties
// color, make, model, hasAC
const Car = {
  color: 'green', // semicolons wreck your life! (inside of objects)
  make: 'Dodge',
  model: 'Dart',
  'hasAC': false,// technically all of the left side is a string
  paint: function(newColor){
    //Car.color = newColor;
    this.color = newColor; //inside of the object 'this' refers to the object
  },
  fixAC: function(){
    this.hasAC = true;
  }
};

console.log('Car: ', Car);
// I want to fix the AC
Car.hasAC = true; //this is shorthand
console.log('Car: ', Car);
//Alternatively
Car['hasAC'] = false;
console.log('Car: ', Car);

//I want to check the color;
console.log('Color of Car: ', Car.color);

//Paint the Car
Car.paint('orange');
console.log('Car: ', Car);

//Fix the AC
Car.fixAC();
console.log('Car after AC fix', Car);




///Shirt objects
//You need at least 3 properties from your plan
//You need at least 3 methods from your plan
//One of you methods should modify a property such as 'paint' above
//You need to demonstrate the usage of each method
const Shirt = {
  color: 'red',
  size: 'large',
  material: 'cotton',
  'hasPocket': true,  
}

Shirt.dye('blue');
Shirt.wash()
Shirt.
console.log('Shirt', Shirt);













//
