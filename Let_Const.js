//let variable brought in ES6.
// allows local scope as well.
// does NOT allow redeclarations.
// does not allow hoistings.

let a = 10;
console.log(a);   // outputs 10
// let a  = 15;    redeclaration of variable not allowed. throws an error.
function f1(){
    let a = 15;
    
    console.log(a);  // outputs 15
}

f1();

{   
    let a = 25;
    let  c = 20;         //block scope
    console.log(c)  //outputs 20
}
console.log(a);   // outputs 10. local scope allowed, hence a does not get assigned.
// console.log(c) //local scope allowed, hence throws error.

// console.log(b);       //hoisting not alllowed.throws an error.
// let b = 27;
// console.log(b);
 

// CONST
// Const is for values that can't be reassigned.
// allows block scope like let.
// does not allow hoistings.
// {
// const z = 29;
// }
// console.log(z);

// console.log(y);
// const y = 1;
// console.log(y);
