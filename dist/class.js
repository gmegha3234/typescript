//Everything is public by default
//public, private ,protected(allowed in class and its children)
//readonly --- used for creating a constant in class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    // changeName():void{
    //     this.unChangeableName="djdjdjjd"
    // }
    User.prototype.getName = function () {
        return this.firstname + " " + this.lastname;
    };
    User.maxAge = 50;
    return User;
}());
var usert = new User("Megha", "Gupta");
console.log(usert.getName);
console.log(User.maxAge); //fetching static property
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(User));
var admin = new Admin("Ruhi", "Gupta");
console.log(admin.getName());
console.log(admin.setEditor("Juhi"));
