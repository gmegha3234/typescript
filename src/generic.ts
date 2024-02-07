const addId=<T extends object>(obj : T)=>{
    const id = Math.random().toString(16);
     return {
        ...obj,
        id
     };
}

interface MyInterface<T,V>{
    name : string;
    data: T;
    meta : V;
}
const myuser : MyInterface <{meta : string},string> = {
    name : "Jack",
    data:{meta :"foo"},
    meta : "metatag"
}
const youruser : MyInterface <string [],number>={
    name:"Roy",
    data :["foo","bar"],
    meta : 2
};
const result=addId<MyInterface>(myuser);
console.log(result);