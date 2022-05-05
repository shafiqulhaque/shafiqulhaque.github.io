// 1

var add = (function () {
    let counter = 0;
    let getCounterValue = () => {
        counter;
    };
    let increment = () => {
        counter = getCounterValue() + 1;
    };
    let reSet = () => {
        counter = 0;
    };

    return {
        getCounterValue: getCounterValue,
        increment: increment,
        reSet: reSet,
    };
})();

// 2

// Free variables areneither locally declared nor passed as parameter.Here the counter is the free variable.

// 3

var make_adder = (function () {
    return (value) => {
        let counter = 0;
        return () => {
            return (counter += value);
        };
    };

})();

// 4

// While Implementing the IIFE function and implementing all the variable and function declaration inside
// that so the their scope is limited to that function only.

// 5

Employee = (function () {
    let name = "";
    let age = 0;
    let salary = 0;
    let getName = () => {
        return name;
    };
    let getAge = () => {
        return age;
    };
    let getSalary = () => {
        return salary;
    };
    let setName = (nameNew) => {
        name = nameNew;
    };
    let setAge = (ageNew) => {
        age = ageNew;
    };
    let setSalary = (salaryNew) => {
        salary = salaryNew;
    };
    let incrementSalary = (percentage) => {
        salary = setSalary(getSalary * (percentage / 100));
    };
    let incrementAge = (age) => {
        age = getAge() + age;
    };
    return {
        setAge: setAge,
        setName: setName,
        setSalary: setSalary,
        incrementAge: incrementAge,
        incrementSalary: incrementSalary,
    };
})();


// 6

console.log("First create the field and the getter and setter methods in the main function body");

let address = " ";
let setAddress = (address) => {
    addressN = address
}
let getAddress = () => {
    return address
}
