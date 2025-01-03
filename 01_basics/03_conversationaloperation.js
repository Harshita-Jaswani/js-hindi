let score="hello"
let score2=null
let score3=undefined

console.log(typeof score)

console.log(typeof (score))

let converted= Number(score)
console.log(typeof converted)
console.log(converted) // iska output is NaN bcz hello cant be converted to a number.
console.log(typeof score2)
let converted2= Number(score2)
console.log(converted2)// when null got converted to number then uski value will be zero
console.log(typeof score3)
let converted3= Number(score3)
console.log(converted3)// when undefined got converted to number then uski value will be NaN.
// similary we can convert into boolean as well
// 1=> true
// 0=> false and some string value will also get converted to true.
// so we need to check what value is getting converted into what?
let a =33
let b= String(a)
console.log(b)
console.log(typeof b)

//--------------------OPERATIONS---------------------

console.log(2+3);
console.log(2-3);
console.log(2*3);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let c=3
let negval=-c;
console.log(negval)

// adding 2 strings.
let str1="hiii"
let str2="  harshita"

console.log(str1+str2)
console.log("1" +"2")
console.log(1 +"2")
console.log("1" +2)
console.log(1 +2+ "3")// if in the starting no. is there ,they will get added.
console.log("1" +2+3)// but not in this case.


console.log(+true);// its answer is 1.
///console.log(true+); this will give you error, we cant write like this
// you can read the prefix and postfix from the documenttaion.