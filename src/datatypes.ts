const doSomething = () : void=>{
    console.log("doSomething");
}
//void means null or undefined.Mainly specified to return nothing from function

let foo:void=null;
foo=undefined;
// foo="megha"-----error 

//any means can be assigned value of any type. It turns off all typescript checks
let foo1 : any = 'aa';
foo1="Megha";
console.log(foo1.bar());//does not give error even bar does not exist
//use  of any is not recommended

//function of type never will not executed
// const do= (): never=>{
//     console.log("hey");
// }
const doTask = (): never=>{
    throw "never";
}

//unknown type is same as any but unknown cant be assigned to other type
let a:any=10;
let b:unknown=10;
let c:string =a;
// let d: string = b;Type 'unknown' is not assignable to type 'string'

console.log(a.foo())//no error
// console.log(b.foo())// Property 'foo' does not exist on type 'unknown'.

//type assertion(convert one type to another)
let d:string = a as string// we use as for type assertion

let pageNum:string="1";
let numericPageNum:number = pageNum as unknown as number;//We cannot directly convert a string to number
// We have to first convert it to unknown and then to number.

let page:any="1";
let page1 = page as string;// as keywoard is used as string
