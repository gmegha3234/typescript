type ID=string;
type PopularString=string;
type MayBePopularTag = PopularString | null;
interface UserInterface{
    id?:ID;
    name:string;
    age?:number;//for optional args
    getMessage():string;
}
const user1:UserInterface={name:"Megha",age:10,getMessage() {
    return "Hello  "+ name
},};
const user2: UserInterface = {
    name: "Ruhi", age: 19, getMessage() {
        return "Hello  " + name
    },id:"2"
};
const user3: UserInterface = {
    name: "Sneha", getMessage() {
        return "Hello  " + name
    }
};
console.log(user1.name);
console.log(user1.getMessage());

let user:UserInterface|null=null;
const popularString: PopularString[] = ['dragon','coffee'];
const dragonTag:MayBePopularTag = "dragon";