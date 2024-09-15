//var has a global and functional scope
// it can be redeclared
// it can be hoisted. 

var a = 10;          //globally declared
console.log(a);      // outputs 10
 
function f1(){
    var a = 20;      // functional scope, redeclared var a.

    console.log(a);  // outputs 20
}
 f1();

{
    var a  = 15;     // block scope(not available in var)

    console.log(a);  // outputs 15
}

console.log(a)      // outputs 15 as v ar doesn't allow block scope.
                   //  the earlier value of 10 gets reassigned as 15.

console.log(b);   // var can be hoisted.
var b = 40;
console.log(b);   // outputs 40.