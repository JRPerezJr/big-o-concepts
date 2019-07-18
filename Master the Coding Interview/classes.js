//reference type
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

object1 === object2;

object1 === object3;

//context vs scope
function b() {
  let a = 4; //scope
}
console.log(this); //is the window object
//console.log(this === window);
this.alert("Hello");

const object4 = {
  a: function() {
    console.log("A function", this);
  }
};
object4.a();

//instantiation
class Player {
  constructor(name, type) {
    console.log("Player", this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I am a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    console.log("Wizard", this);
  }
  play() {
    console.log(`Yeah!, I am a ${this.type} `);
  }
}

const wizard1 = new Wizard("Maven", "Healer");
const wizard2 = new Wizard("Jorbin", "Dark Magic");
