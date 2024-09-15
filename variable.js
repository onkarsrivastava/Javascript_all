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
    var c = 29;     // block scope(not available in var)
    
    console.log(c);  // outputs 29
}


console.log(c);     // outputs 29 as block scope not allowed

console.log(b);   // var can be hoisted.
var b = 40;
console.log(b);   // outputs 40.