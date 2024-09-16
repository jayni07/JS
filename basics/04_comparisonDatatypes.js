console.log("2">1);



//== and other comparisons work differently.
//when we compare undefined with anything it wwill always give false

// == and === differs. == does the conversion if necessary while checking, === doesn't. it is strict with data types.

//PREFIX AND POSTFIX OPERATIONS

let x = 3;
const y = x++;  //changes the value of only Y. POSTFIX

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;  //changes the value of both x and y. PREFIX

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
