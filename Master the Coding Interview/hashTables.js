let user = {
    age: 34,
    name: "James",
    magic: true,
    scream: function () {
        console.log("Yo!");
    } //can only save the key as a string. An object has no order. Its saved in randomly in different places.
};
user.age; //O(1) lookup
user.skill = "Archery"; //O(1) insertion
user.scream(); //O(1) lookup of function

const a = new Map(); //a map allows you to save any data type as the key. It also maintains insertion order.

const b = new Set(); //It only stores the keys no values.

class HashTable {
    constructor(size) {
        this.data = new Array(size);

    }
    //Small hash function
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) %
                this.data.length
            //console.log(hash);
        }
        return hash;
    }

    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
            //console.log(this.data);
        }
        this.data[address].push([key, value]);
        return this.data;
    } //O(1)

    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        console.log(currentBucket);
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        } //O(1) if ther are no collisions 
        return undefined;
    }
    keys() {
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray;
    }

}

const myHashTable = new HashTable(50);
//myHashTable._hash('grapes');
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 55);
myHashTable.set('ornages', 20);
myHashTable.get('grapes');
myHashTable.keys();