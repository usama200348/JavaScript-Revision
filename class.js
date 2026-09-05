/************************Operation In Java Scripts********************* */

let value = 3;
let negvalue = -value
console.log(negvalue);

// Now contatination

let fname = "Usama";
let lname = "Sohail";
let fullname = fname + lname;
// console.log(fullname);


/**
 * Javascript ka behavior left to right chalta ha agar hum "2" +5+6 likhain gaye toh sab string mai laa ga or agar 2+5+"6" toh 76 print kara ga and "-" karna pa sab ko number format mai laa ga
 */
let num1 = 1+"2"
console.log(num1);
let num2 = 2+5+"6"
console.log(num2);
console.log(+true);
console.log(+"");


let num4 = 55
// post Fix Mean Values Increment Before Usage
++num4;
console.log("PostFix " + num4);
// PreFix means value intrement after usage
num4++;
console.log("PreFix " + num4);

// If We Add 2

num4+=2
console.log("Increment Of 2 addition " + num4);


