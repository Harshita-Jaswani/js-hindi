const name="yash"
const name2='yashika'
console.log(`there are 2 friends , one is ${name} and the other is 
     ${name2}`)

const name3= new String("harshitaa")
//in this way also we can define string, here it is stored as a object.which has various properties.and we can access those properties.
console.log(name3)  
console.log(name3[0])   // iska answer is h
console.log(name3.length)
console.log(name3.toUpperCase())
console.log(name3.toUpperCase)
console.log(name3.charAt(2))
console.log(name3.indexOf("t"))
//there are various properties.

const newstring=name3.substring(0,4)//this will print upto 3 index.
console.log(newstring)
// there is a similar method like substring,which is slice,in that we can use negative value as well.
const a="harshita"
const newstring2=a.slice(-7,4)//this will start writing from the back.
console.log(newstring2)
//Syntax: str.slice(start, end)
//The start can be positive (index from the beginning) or negative 
//  (index from the end).
//The end is exclusive and specifies where slicing stops.

const c="      hello      "
console.log(c)
console.log(c.trim())// trim removes all the extra white spaces.

const url="http://hellomrhoware you/@#hie.com"
console.log(url.replace("hello","786"))
console.log(url.includes("hie"))

// so there are vrious methods.
const userx="my name is userx."
console.log(userx.split(" "))
// the split function converts a string into arrays on the basis of the separator given in the brackets,like here we have given the space.