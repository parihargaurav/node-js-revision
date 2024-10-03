function add(a, b){
    return a + b;
}
function sub(a, b){
    return a - b;
}

module.exports = {
    add: add,
    sub: sub
};




const math = require("./math");
const fs = require("fs");
const os = require("os");

console.log("Math value is", math.sub(2, 3));
console.log("Math value is", math.add(2, 3));

const result = fs.readFileSync("./contacts.txt", "utf-8");
console.log(result);

console.log(os.cpus().length); // 12 threads can be maximum size

// blocking operations  Synchronous 
// non blocking operations Asynchronous 










