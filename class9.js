// Premitive Data type are call by  value they are of 7 types

// String , Number, Boolean  , Null (Empty)  , undeifined(value not assigned) , symbol , BigInt


// Second Data type id Reference type

// Array , Objects , Functions

// Javascript in dynamic language which means same variable in javascript can hold different datatype 

const score = 100;
const scoreValue = 10.52;
const isLoggedIn = false;
const outTemp  = null;
const userEmail = undefined;

const id = Symbol('123');
const anotherId = Symbol('123'); // In symbol return value will not be same
console.log(id);
console.log(anotherId);
console.log(id === anotherId);


const bigNumber = 212458107n
console.log("Big Int Data Type " +  typeof(bigNumber));

// Array 
const arr = ["Usama", 123,true,523.4];
// Object
const myObj = {
    name : "Usama",
    age : 23,
    weight : 88
};

function myfunc(num1 , num2){

   let num3 = num1+num2  
   console.log(num3);
    
}

myfunc(2,3);

console.log(typeof(myfunc));

// All Premitive Function Are Of Object Type
