//1. a is not defined so it will be false, but b is defined as 3 so it will be true.
(function () {
    var a = b = 3;
})();
console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));

//2.
var addSix = createBase(6);
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27

function createBase(baseNum) {
    return function(num) {
        return baseNum + num;
    }
}

//3. 