//functions

//how to declaare a function
function myname(){
    console.log("J")
    console.log("a")
    console.log("g")
    console.log("a")
    console.log("d")
    console.log("e")
    console.log("e")
    console.log("p")
}
myname()   // function is a blocl of code where we want we can use multiople times when it neccesary
myname  // () without declaring this the will not execute because it just as a reference

//real senarios

function addtwonumbers(num1,num2){  //num1,num2 are parameters of a function
    console.log(num1+num2)
}
addtwonumbers(3,5)// 3,5 are the arguments of a function
addtwonumbers(3,"5") // it considers as a string because of one num in quotes 
addtwonumbers() // gives NaN

// we can write functions by return 

function addnums(num1,num2){
    num1 + num2
    console.log("Hi")  
}
console.log(addnums(3,5)) //gives undefined beacuse we defined a function we given a variable to function

function addnums1(num1,num2){
    return num1+num2
    console.log("Hi"); //after return any of the code will not be run
    
}

const result = addnums1(3,30)
console.log("result:",result)

//another type functions by using arguments and parameters

function userLogin(username){
    return `${username} is loged in`
}

console.log(userLogin("Jagadeep"))
console.log(userLogin(""))  // here name is not defined 
console.log(userLogin()) // here undefined will exicute

// simply use if statements like this code 
function userLogin1(username){
    if (username === undefined){
        console.log("Please give the username")
        return
    }
    return `${username} is loged in`
}

console.log(userLogin1("Deepu"))
console.log(userLogin1(""));
console.log((userLogin1()));

//simplyfying for undefined and ""
function userLogin2(username){
    if (!username){
        console.log("Please give the username")
        return
    }
    return `${username} is logged in.`
}
console.log(userLogin2("Deepu"))
console.log(userLogin2(""));
console.log((userLogin2()));

//we see the senarios in calculating the cart

function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(200,220,300))

//rest operators it gives an array
function calculateCartPrice1(...num1){
    return num1
}
console.log(calculateCartPrice1(200,300,400,500));

// we can use the rest of items also a rest operator
function calculateCartPrice3(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice3(200,300,400,500,600));

//we can use objects and arrays also in the function
//object
const myPrdouct = {
    name:"Jagadeep",
    age:25,
    prices:2350
}

function mycart(myobj){
    console.log(`Hi ${myobj.name}, your total cart price is ${myobj.prices}`)
    console.log(`Hi ${myobj.name}, your total cart price is ${myobj.price}`)//gives undefined when it is not mentioned
}

mycart(myPrdouct)

//arrays
const myarray = [200,600,500,400]

function mynewarray(nums){
    return nums[2]
}

console.log(mynewarray(myarray))




