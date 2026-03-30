//scopes

// generally we have to types of scope one is global and one is local or block scope.

//lets see how let, const and var works in scopes and their difference

let a = 5
const b = 6
var c = 7

//here no code will give error
console.log(a);
console.log(b);
console.log(c);

//while scope is {}

if(true){
    let d = 5
    const e = 6
    var f = 7
}

//here the let and const will give errors
//console.log(d);
//console.log(e);

//whille var will give us a output 
//in scopes the inner scope should not give the output in outer scope that why we didn;t use var in js completely

console.log(f); //var exicutes

//useing var inner and outer
//inner and outer how will define
//block scope and global scope
var g =100
if(true){
    var g = 10
}
console.log(g) // it gives 10 because var scope rewrites it

//using let and const
//inner and outer how will define
//block scope and global scope

let A = 100
if(true){
    let A = 10
    console.log("inner: ",A)
}
console.log("outer: ",A)

const B = 1000
if(true){
    const B = 100
    console.log("inner: ",B)
}
console.log("outer: ",B)

//inner and outer how will define
//block scope and global scope

//Nested scopes
//inner and outer how will define
//block scope and global scope

function one(){
    const username = "Jagadeep"
    function two(){
        const website = "Youtube"
        console.log(username)
    }
    //console.log(website) => we can't declare the function of inner(block) in an outer(global)

    two() // this calls the two() function and exicutes when one() function calls the outer directly can't run
}

one() //this calls the one() function inside the two function

//same as we use in if-else statements
//global
if(true){ // inner-global
    const username = "Jagadeep"
    if(username === "Jagadeep"){ //inner
        const website = "Youtube"
        console.log(`${username} has a account in ${website}`)
    }
}

//*************************Intersting in scopes***********************/


//in this function we can declare before or after the function it will exicute
console.log(addOne(5)) //calling before function
function addOne(num){
    return num + 1
}
console.log(addOne(5)) //calling after function

//expression function we have to call after the function beforeenfunction we can't access

//console.log(addTwo(5)) //we can't call before function in expression

//function expreession
const addtwo = function(num){
    return num +2
}
console.log(addtwo(5)) //we can call after function in expression








