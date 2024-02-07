//Typescript has lots of types for DOM out of the box.
//Typescript does not know anything about markup
//Element is the highest class in hierarchy
//Event is the highest class in hierarchy
const someElement = document.querySelector('.foo') as HTMLInputElement;
console.log(someElement.value);
console.log(someElement.type);

const newElement = document.querySelector('.fast');
// newElement.addEventListener('blur',(event)=>{
//     console.log("event",event);
// })


newElement.addEventListener('blur',(event)=>{
    const target =event.target as HTMLInputElement;
    console.log(target.value);
})