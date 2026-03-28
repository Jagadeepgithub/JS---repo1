// Objects

//singleton
//use of symbol
const mySym = Symbol('key1')

//types of object we can write
const JsUser = {
    name:"Jagadeep",
    age:25,
    mySym:"key2",
    [mySym]:"myKey1",
    location:"Hyderabad",
    email:"jagadeep.google.com",
    isLoggedIn:false,
    priviousLogin:["Monday","Thursday"]

}

console.log(JsUser)
//to access objects we use . or []

//in backend the code will be taken as 
const myObj = {
    "full name":"Jagadeep",
    "age":25,
    "location":"Kurnool",
    "email":"jagadeep.yahoo.com",
    "IsLoggedIn":false,
    "lastLogin":["Monday","sunday"]
}

//.dot notation can acces to which are not in ""
console.log(myObj.email)
//console.log(myObj.full name) // can't acces like this keys

//we can access thorugh the []
console.log(myObj["full name"])

//to acess symbol which is correct
console.log(JsUser.mySym)
console.log(typeof JsUser); // it just gives as a string
console.log(JsUser[mySym])
console.log(typeof JsUser[mySym]);// this acces the symbol

console.log(JsUser);
console.log(myObj);

//how to change the object values
JsUser.email = "deepu.com";
JsUser.name = "K Jagadeep"
console.log(JsUser)

//we can lock the values tp further not to change or update
Object.freeze() //we uses // freezes the object

//after freezes we can't use that object
JsUser.email = "jagadeep.microsft.com";
console.log(JsUser); //it will not change the email

//Object.freeze(JsUser)

console.log(myObj)

//lets add function to the object as a variable

myObj.greeting1 = function(){
    console.log("Hi JsUser");
}

myObj.greeting2 = function(){
    console.log(`Hi jsUser, ${this.email}`) //this refers to the object where it is
}

console.log(myObj.greeting1)
console.log(myObj.greeting1())
console.log(myObj.greeting2)
console.log(myObj.greeting2());

console.log(myObj);
