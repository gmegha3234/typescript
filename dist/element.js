//Typescript has lots of types for DOM out of the box.
//Typescript does not know anything about markup
//Element is the highest class in hierarchy
//Event is the highest class in hierarchy
var someElement = document.querySelector('.foo');
console.log(someElement.value);
console.log(someElement.type);
var newElement = document.querySelector('.fast');
// newElement.addEventListener('blur',(event)=>{
//     console.log("event",event);
// })
newElement.addEventListener('blur', function (event) {
    var target = event.target;
    console.log(target.value);
});
