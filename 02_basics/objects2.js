// objects

//singleton => which refers to the single object

const myObj = new Object()
console.log(myObj)

const myObj1 = {}
myObj1.id = "123abc"
myObj1.email = "deepu.google.com"
myObj1.isLoggedIn  = false
myObj1.name= "Swamy"

console.log(myObj1)

//accessing nested objects

const regularname = {
    fullname:{
        userfullname:{
            firstname:"Jagadeep",
            lastname:"Kadam"
        }
    }
}
console.log(regularname)
console.log(regularname.fullname)
console.log(regularname.fullname.userfullname);
console.log(regularname.fullname.userfullname.firstname)

//combine two objects
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

const obj3 = {obj1,obj2}
console.log(obj3)

//object.assign
const obj4 = Object.assign(obj1,obj2)
console.log(obj4)

//similar code will give but we should give {}at first 
const sameobj4 = Object.assign({},obj1,obj2) // => it will target the first item in and assign total items to the first item
console.log(sameobj4)

//spread operators mostly used
const obj5 = {...obj1,...obj2}
console.log(obj5)

//we can use and get data from database as arrays
const users = [
    {
        id:"123",
        email:"jaga.com"
    },
    {
        id:"123",
        email:"jaga.com"
    },
    {
        id:"123",
        email:"jaga.com"
    }
]

//to acces this database array
console.log(users[1].email)
console.log(myObj1)

//object methods can use we want all keys values in objects
console.log(Object.keys(myObj1))
console.log(Object.values(myObj1))

// we can asses to the entries it will gives in an array key value pair
console.log(Object.entries(myObj1))

//we can see as if we have those properties are not
console.log(myObj1.hasOwnProperty("isLoggedIn"))
console.log(myObj1.hasOwnProperty("islooged"))

// we can use console to see more prototypes which we use

// d-structuring

const myObj2 = {
    coursename:"JS beginers",
    email:"jagadeep.com",
    courseInstructor:"Deepu"
}
//accesing no of times
console.log(myObj2)

console.log(myObj2.courseInstructor)

//d-structuring
const {courseInstructor}= myObj2;
console.log(courseInstructor)

//we can modifyname in d-structuring
const {coursename:fullcourse} = myObj2;

console.log(fullcourse)


//APIS  in backend it gives Json type we can access thorugh fetch