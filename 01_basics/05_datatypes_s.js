// primitive ....these are call  by value.
// 7 types. number,string,boolean,null,undefined,BigInt,symbol

const a=2;
const b=2.2;
const c="2";
const d=null;
let h;
const f=undefined;
const g= false;
const aj=22784689973876365472n;//this is how we define bigint.
const id= Symbol('123')
const id2= Symbol('123')
console.log(id==id2)//iska answer is false.
//bcz their results will be different, bcz they are sybmol
//symbols alwaz return a unique value.


// reference ,,,also called non primitive.
//arrays,objects,functions.

let array1=["apple","mango"]
let object1={
    name:"harshita",
    age:22
}

let funct1=function(){
    console.log("hello kitty");
}
console.log(typeof array1 )
