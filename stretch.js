//1. a is not defined outside of the function scope so it will be false, but b is defined as 3 as a global variable so it will be true.
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

//3. In OOP, the data and what you can do with the data (behaviors) is brought together in programs, but in functional programming, the data and behaviors are kept separate. The focus on functions for FP enables statements being able to perform particular tasks easier and have not write over and over. OOP does make it easier to utilize other tools and increase efficiency.
//FP uses immutable data, which means it can't be changed. This can be useful if you don't want it being tampered, but it lowers the flexibility and usefulness of said data sometimes, whereas OOP does use mutable data.
//FP follows the declarative programming model, where it matters much less how it arrives at completing a task, only that it gets done. OOP uses imperative, in which the steps do matter. The less direct control in FP can cause issues with certain systems where how and when things get done matter.
//When you only have a few things that you can to work with or do tasks on, FP works well as it can easily apply many operations to said things. If you have many things, but relatively few operations, then OOP becomes a better choice.