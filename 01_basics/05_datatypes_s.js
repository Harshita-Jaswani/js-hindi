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
//--------------------------------------------------//

//there are two types of memory
// heap (non-primitive) and stack (primitive)
// stack- changes are made in the copy.
//heap- refrence s provided,so changes are made in the original space.


let user1={
    name:"harshit",
    age:23
}
let user2=user1;
user2.age=24;
console.log(user1.age)//user1 ki age bhi vhange ho jaaegi.
console.log(user2.age)//bcz dono ka reference is same.
//in heap datatype user1 and user2 points to the same memory reference
