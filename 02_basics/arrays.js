// arrays
//types of arrays how we can write

const myArr = [0,1,2,,3,4,5,6]
const myHeros = ["Shaktiman","nagraj"]
const myarr1 = new Array(55,"hero",56)

console.log(myArr[0])
console.log(myArr[3])
console.log(myHeros[1])
console.log(myarr1[1])

//Array methods
//push => it adds a item in last
myArr.push(7)
console.log(myArr)

//pop => it deletes the item in the last
console.log(myArr)
myArr.pop() 

//unshift => it adds the item in the start
myArr.unshift(5)
console.log(myArr)

//shift => it deletes the item in the start
myArr.shift() 
console.log(myArr)

//questionary method
// includes

console.log(myArr.includes("Jagadeep"))
console.log(myArr.includes(3))

//indexof => returns the -1 in case of not in item
console.log(myArr.indexOf(9)) 
console.log(myArr.indexOf(2))

//joins
const newArr = myArr.join() //returns as a string
console.log(newArr)
console.log(typeof newArr)
console.log(myArr)

//slice and splice

//slice
console.log("A ",myArr)

const newArr1 = myArr.slice(1,3)
console.log(newArr1)
console.log("B ",myArr)

//splice
const newArr2 = myArr.splice(1,3)
console.log(newArr2)
console.log("C ", myArr)






