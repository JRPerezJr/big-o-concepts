class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item; //O(1)
    this.length++;
    return this.length;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1]; //O(1)
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      //O(n)
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
console.log(newArray);
console.log(newArray.get(0));

newArray.push("You");
console.log(newArray.data);
newArray.push("Buy me crank and watch me roll");
console.log(newArray);
newArray.push("You");
console.log("Push function", newArray);
newArray.pop();
console.log("Pop function", newArray);
newArray.delete(1);
console.log("Delete Function", newArray);
