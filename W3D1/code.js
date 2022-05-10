/* Exercise 1:
Define a filter function on the String object. The function accepts an array of strings that
specifies a list of banned words. The function returns the string after removing all the
banned words.*/

String.prototype.filter = function (bannedWords) {
    let splitted = this.split(" ");
    return splitted.filter((x) => !bannedWords.includes(x)).reduce((a, b) => a + " " + b);
}

/* Exercise 2:
Write a BubbleSort algorithm on the Array object.  Bubble sort is a simple sorting algorithm 
that works by repeatedly stepping through the list to be sorted, Example:[6,4,0, 3,-2,1].bubbleSort();
 Output : [-2, 0, 1, 3, 4, 6]
*/

Array.prototype.bubbleSort = function () {
    let toBeSorted = this;
    for (let i = 0; i < toBeSorted.length; i++) {
        for (j = 0; j < toBeSorted.length; j++) {
            if (toBeSorted[i] < toBeSorted[j]) {
                let temp = toBeSorted[j];
                toBeSorted[j] = toBeSorted[i];
                toBeSorted[i] = temp;
            }
        }
    }
    return toBeSorted;
}

/* Exercise 3
The last exercise for today comes from:  https://www.learn-js.org/en/Inheritance .
Create an object called Teacher derived from the Person class, and implement a method called teach which receives 
a string called subject, and returns: [teacher's name] is now teaching [subject].
*/

var Person = function () { };

Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;

}
Person.prototype.describe = function () {
    return this.name + ", " + this.age + " years old. ";
}


var Teacher = function () { };
Teacher.prototype = new Person();

Teacher.prototype.teach = function (subject) {
    return this.name + " is now teaching " + subject;
}

