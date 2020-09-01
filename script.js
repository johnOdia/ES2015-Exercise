// NUMBER 1
 var person = {
    fullName: "Harry Potter",
    sayHi: function(){
        setTimeout(function(){
            console.log("Your name is " + this.fullName)
        }.bind(this),1000)
    }
}

// REFACTORED TO:
const person = {
    fullName: "Harry Potter",
    sayHi: function() {
        setTimeout(() => {
            console.log("Your name is " + this.fullName)
        },1000)
    }
}
person.sayHi()


//NUMBER 2
 var name = "Josie"
console.log("When " + name + " comes home, so good")

// REFACTORED TO:
let name = "Josie"
console.log(`When ${name} comes home, so good`)



//NUMBER 3
var DO_NOT_CHANGE = 42;
   DO_NOT_CHANGE = 50; // stop me from doing this!


// REFACTORED TO:
const DO_NOT_CHANGE = 42
DO_NOT_CHANGE = 50 //you have been stopped!





//NUMBER 4
 var arr = [1,2]
   var temp = arr[0]
   arr[0] = arr[1]
   arr[1] = temp

// REFACTORED TO:
let arr = [1,2]
let temp = arr[0]
arr[0] = arr[1]
arr[1] = temp



//NUMBER 5
  function double(arr){
    return arr.map(function(val){
      return val*2
    });
   }

// REFACTORED TO:
const double = arr => {
    return arr.map(val => val*2)
   }


//NUMBER 6
var obj = {
    numbers: {
       a: 1,
       b: 2
   } 
 }

var a = obj.numbers.a;
var b = obj.numbers.b;

// REFACTORED TO:
let obj = {
    numbers: {
       a: 1,
       b: 2
   } 
 }

let a = obj.numbers.a;
let b = obj.numbers.b;



//NUMBER 7
function add(a,b){
    if(a === 0) a = 0
    else {
        a = a || 10    
    }
    if(b === 0) b = 0
    else {
        b = b || 10    
    }
    return a+b
  }

// REFACTORED TO:
const add = (a,b) => {
    if(a === 0) a = 0
    else {
        a = a || 10    
    }
    if(b === 0) b = 0
    else {
        b = b || 10    
    }
    return a+b
  }






//Array.from
// from() method on the Array object is used to create a new array instance from a given array. In the case of a string, every alphabet of the string is converted to an element of the new array instance and in case of integer values, a new array instance simply takes the elements of the given array

//Object.assign
// The Object. assign() method only copies enumerable and own properties from a source object to a target object. It uses [[Get]] on the source and [[Set]] on the target, so it will invoke getters and setters. Therefore it assigns properties, versus copying or defining new properties

//Array.includes
// The includes() method on the Array object determines whether an array contains a specified element. This method returns true if the array contains the element, and false if not.

//String.startsWith
// The String.startsWith() method determines whether a string begins with the characters of a specified string. This method returns true if the string begins with the characters, and false if not. Note: The startsWith() method is case sensitive.
