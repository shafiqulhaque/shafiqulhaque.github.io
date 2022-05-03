x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
    console.log(x); // x is declere and initilize within this function so the result is undefined. If x veribale is not declare in this function then it contains globla x value.
    console.log(a); // print 8, reason is parameters name is a, so it's called parameters a
    var f = function(a, b, c) {
        b = a;
        console.log("b: " + b); // Print 8, because a and b value come from function parameters, not global one, argument. it's not effected on global one. 
        b = c;
        var x = 5;
    }
    f(a, b, c);
    console.log(b); // It's come form top level function argument value, which pass 9. So the result is 9
    var x = 10;
}
c(8, 9, 10);
console.log(b); // Inside function b pass as a argument and change it's value inside function. So inside b it's not any effect for global b veriable.
console.log(x); // Inside function x is declare and assign for function scope. If insdie function x value is only assign not declare then it will effected on global veriable
// In that case, This x value come from global veriable. so the result is 1


// Global scope
// Variables declared outside of any function become global variables. 
// Global variables can be accessed and modified from any function.
// Changing value of global variable in any function will reflect throughout the program.
// variables declared inside a function without var keyword also become global variables.


// Local Scope
// Variables declared inside any function with var keyword are called local variables. Local variables cannot be accessed or modified outside the function declaration.


// 3. b, d, e
// b. d. Scope B and C can access scope A. Because scope a data is global scope. 
// e. Scope C can access scope B. Because scope c is inside of B.

var a3 = 10;
function xFunc() {
    var b3 = 12;
    console.log("a3: " + a3);
    function yFunc() {
        var c3 = 14;
        console.log("b3: " + b3);
    }
}
xFunc();


//4.
    // a. 81
    // b. 25

var xx = 9;
function myFunction() {
    return xx * xx;
}
console.log(myFunction()); 
// x is a global veriable, and its contains 9, so the result is 81
xx = 5;
console.log(myFunction());  
// above replace x value with 5, so the result is 25


// 5. 
    // 10 foo veriable is declare on bar function, so it's not effected on global one. so the alert result is 10.

    var foo = 1;
    function bar() {
        console.log(foo);
        if(!foo) {
            var foo = 10;
        }
        alert(foo);
    }
    bar();