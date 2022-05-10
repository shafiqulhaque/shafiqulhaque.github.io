//Assignment Q-1
function max(x, y) {
    //return x > y ? x : y;
    if (x > y) {
        return x;
    } else {
        return y;
    }
}
alert(max(8, 6));

// -----------------------------------------------------

// Assignment Q-2
function max(x, y, z) {
    if (x > y & x > z) {
        return x;
    } else if (y > z & y > x) {
        return y;
    } else {
        return z;
    }
}
alert(max(131, 21, 172));
// ---------------------------------

//Assignment Q-3
function isVowel(argument) {
    var text;
    var argument = argument.toLowerCase();
    var vowels = (['a', 'e', 'i', 'o', 'u']);
    for (var i = 0; i <= vowels.length; i++) {
        if (argument != vowels[i]) {
            continue;
        }
        return true;
    }
    return false;
}
var char = "E"; // give your string here
if (isVowel(char)) {
    //console.log(char + " is a vowel");
    alert(char + " is a vowel");
} else {
    //console.log(char + " is not a vowel");
    alert(char + " is not a vowel");
}
// ---------------------------------
//Assignment Q-4
function multi() {
    let s = 1;
    let array = [1, 2, 3, 4];
    for (let i = 0; i <= array.length - 1; i++) {
        s = s * array[i];
    }
    return s;
}
alert(multi());

function sum() {
    let s = 0;
    let array = [1, 2, 3, 4];

    for (let i = 0; i <= array.length - 1; i++) {
        s = s + array[i];
    }

    return s;
}
alert(sum());
// ---------------------------------

//Assignment Q-5
function reverse(str) {
    let s = "";
    for (let i = str.length - 1; i >= 0; i--) {
        s += str[i];
    }
    return s;
}
alert(reverse("jag testar"));
// ---------------------------------
// Assignment Q-6

function findLongestWordLength(arr) {
    let test = ['Ap', 'Banana', 'Coke', 'Egg'];
    let longest = test[0];

    for (var i = 1; i < test.length; i++) {
        if (longest.length < test[i].length) {
            longest = test[i];
        }
    }
    return longest;
}
alert(findLongestWordLength(test));

// ---------------------------------
// Assignment Q-7
// function filterLongWords(){

// }
// ---------------------------------
//Assignment Q-8

// My Approach of Solution
// original array to operate
// const a = [1, 3, 5, 3, 3];

// a) multiply each element by 10; 
const multiplyArray = a.map(function (e, i, array) {
    return e * 10;
})
document.writeln("Multiply by 10: " + multiplyArray.toString() + "<br />");

//b) return array with all elements equal to 3; 
const only3Data = a.filter(function (e, i, array) {
    return e === 3;
})
document.writeln("Filter only 3 : " + only3Data.toString() + "<br/>");

//c) return the product of all elements;
const productOfElement = a.reduce(function (prevValue, e, i, array) {
    return prevValue * e;
})
document.writeln("Product : " + productOfElement);
// ---------------------------------

