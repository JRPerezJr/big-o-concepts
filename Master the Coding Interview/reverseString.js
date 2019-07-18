//Create a function that reverses a string:
//'Hi my name is Mud' should be:
//'duM si eman ym iH'

function reverseStr(str) {
    //check input first
    if (!str || str.length < 2 || typeof str !== "string") {
        return "Not a good input";
    }
    //Convert into an Array
    const backwards = [];
    //Grab the length of the string in the Array
    const totalItems = str.length - 1;
    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i]); //pushing each item in an array
    }
    console.log(backwards);
    //return backwards.toString('');
    return backwards.join("");
}

//Now using built in methods
function reverseStr2(str) {
    return str
        .split("")
        .reverse()
        .join("");
}

//ES6
const reverseStr3 = str =>
    str
    .split("")
    .reverse()
    .join("");

//With the spread operator
const reverseStr4 = str => [...str].reverse().join("");

//reverseStr('My name is Mud');

//reverseStr2('My name is Mud');

//reverseStr3('My name is Mud');

reverseStr4("My name is Mud");