let score = 22;

// console.log(typeof(score));
// console.log(score);


// let Score_In_Number = Number(score);
// console.log(typeof(Score_In_Number));


// converting in number can be easy in number '33' => 33 
/*
"33abc" so type will be string so it will return NaN
Boolean Value Will Convert in 0 and 1

if 1 => ture and 0 => false

"" => false
"Usama " => true 
*/

let isLoggedIn;

isLoggedIn = Number(score);

console.log(typeof(isLoggedIn));
console.log(isLoggedIn);

// Now Checking In Boolean Values If We Add String
isLoggedIn = Boolean(score);
console.log(typeof(isLoggedIn));
console.log(isLoggedIn);

// Converting String

isLoggedIn = String(score);
console.log(typeof(isLoggedIn));
console.log(isLoggedIn);

