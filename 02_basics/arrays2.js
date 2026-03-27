//arrays 2

const marvelHeros = ["Thor","Spiderman","Dr.Strange"]
const dcHeros = ["Superman","WonderWoman","Flashman"]

//adding both strings 
// using +
console.log([marvelHeros+dcHeros]) // we will not use this

//using push
//marvelHeros.push(dcHeros)
//console.log(marvelHeros) => it changes the below concat 

//using concat
const allHeros= marvelHeros.concat(dcHeros)
console.log(allHeros)

//spread operators => this method is used in modern JS concepts
const allMyHeros = [...marvelHeros,...dcHeros] 
console.log(allMyHeros)

//flat()
const myArr = [0,1,2,[3,4,5],6,[7,8,9,[0,11,12],13]]
const myNewArr = myArr.flat(Infinity)
console.log(myNewArr)

//Array.isArray => it finds if the array is present or not
console.log(Array.isArray(myArr))
console.log(Array.isArray("Jagadeep"))

//Array.from() => converts all values of array , separate
console.log(Array.from("Jagadeep"))
console.log(Array.from({name:"Jagadeep"})) //=> it gives [] because we have to mention either key or value

//Array.of() =>converts many items in single array
let score1 =100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3))

