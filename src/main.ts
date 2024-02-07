let di = "ruhi";
di = "tick";
//string
let hello: string = "Megha";
hello = "rag"


//function
const func = (name: string, surname: string): string => {
   return name + " " + surname;
}
console.log(func("memem", "ddhhdhd"))
//object
const person: { name: string, age: number } = {
   name: "Megha",
   age: 10
}

const person1: { name: string, age: number } = { name: "Ruhi", age: 10 }

let id:string | number="1";
let errorMessage : string | null =null;
id=10;