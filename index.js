//this is a very simple class for greeting .
// as we read in readme file that class is a blue print of creating objects. just like in typescript we declare type alises and interface
// before declaring any object or array
// here in this  class I define a simple message method who print hello world
class Hello {
  message() {
    console.log("Hello world");
  }
}

//  Here we create oue actual object (instance) of the Hello class
let greeting = new Hello();

// here we call message method
greeting.message();
// -------------------------------------------------------------------------------------------------------------------------------------------------
// In above I make a simple class which only contain one method.
// In below i make a class which contain simple propertiess only.

class myNum {
  // x;y;   // here i declare two variables but not assign any value in it
  x = 0;
  y = 0; // here i declare two variables and assign his base value 0 which will change below if needed
}

let number = new myNum(); // here i make object called "number" using the blueprint of class "myNum"
number.x = 10; // here i assign a value to my variables which i declare above in class "myNum"
number.y = 13; //  -----------same as above--------------
console.log(number);
// ------------------------------------------------------------------------------------------------------------------------------------------------
//    Types of Methods

//1) Constructor Method
/*  
   The constructor method is a special method for creating and initializing an object created within 
    a class. It is called when an object is instantiated.
    In other word constructor method is just like anonymous function .By using constructor keyword 
     you don't need to define the name of method. Word"constructor " is a predifine keyword . 
     In JavaScript, constructors are special functions that are invoked (called) when you create a new object
      using the new keyword. that mean you didn't need to call the function after instance of object 
      one reason behind this is its a method with no name
  syntax 
        constructor(){
       print something or any task you want
    }

 */
//  simple
class salam {
  constructor() {
    console.log("Asalam Alaikum");
  }
  // constructor(a){}      SyntaxError: A class may only have one constructor . if you initialize
  //                           second u got error bcoz class support only  maximum one constructor
}
let a = new salam();
let b = new salam();

/* 2) prototype or instance method 
     its a oposite of constructor method you must define the name of method . and also called this method with 
     name after object instance .
     For simple example check the first program of this page
     
     Here is a real word example of instance/prototype method with the combination of constructor method.
*/
class Animal {
    constructor(name, type) {
      this.name = name;
      this.type = type;
    }
  
    describe() {
      console.log(`${this.name} is a ${this.type}.`);
    }
  }
  
  const animal = new Animal('Leo', 'Lion');
  animal.describe();
  