//Everything is public by default
//public, private ,protected(allowed in class and its children)
//readonly --- used for creating a constant in class

interface User1Interface{
    getName():string;
}

class User implements User1Interface{
   private  firstname : string
   private lastname : string
   readonly unChangeableName : string
   static readonly maxAge = 50;
    constructor(firstname : string, lastname : string){
        this.firstname=firstname;
        this.lastname=lastname;
    }
    // changeName():void{
    //     this.unChangeableName="djdjdjjd"
    // }
    getName():string {
        return this.firstname + " "+ this.lastname;
    }

}

const usert = new User("Megha","Gupta");
console.log(usert.getName);
console.log(User.maxAge);//fetching static property

class Admin extends User{
   private editor : string;
   setEditor(editor:string): void{
    this.editor=editor;
   }
   getEditor():string{
    return this.editor;
   }
}
const admin= new Admin("Ruhi","Gupta");
console.log(admin.getName());
console.log(admin.setEditor("Juhi"));
