var doSomething = function () {
    console.log("doSomething");
};
//void means null or undefined.Mainly specified to return nothing from function
var foo = null;
foo = undefined;
// foo="megha"-----error 
//any means can be assigned value of any type. It turns off all typescript checks
var foo1 = 'aa';
foo1 = "Megha";
console.log(foo1.bar()); //does not give error even bar does not exist
//use  of any is not recommended
//function of type never will not executed
// const do= (): never=>{
//     console.log("hey");
// }
var doTask = function () {
    throw "never";
};
//unknown type is same as any but unknown cant be assigned to other type
var a = 10;
var b = 10;
var c = a;
// let d: string = b;Type 'unknown' is not assignable to type 'string'
console.log(a.foo()); //no error
// console.log(b.foo())// Property 'foo' does not exist on type 'unknown'.
//type assertion(convert one type to another)
var d = a; // we use as for type assertion
var pageNum = "1";
var numericPageNum = pageNum; //We cannot directly convert a string to number
// We have to first convert it to unknown and then to number.
var page = "1";
var page1 = page; // as keywoard is used as string
