const strings = ["a", "b", "c", "d"];
//4*4 = 16 bytes of storage

//access
strings[2]; //O(1)
console.log("Access", strings);

//push
strings.push("e"); //O(1) could be O(n)
console.log("Push", strings);

//pop
strings.pop(); //O(1)
console.log("Pop", strings);
strings.pop();
console.log("Pop", strings);

//unshift
strings.unshift("x"); //O(n)
console.log("Unshift", strings);

//splice
strings.splice(2, 0, "Ender"); //O(n)
console.log("Splice", strings);
