// const user={
//     username:"jayni",
//     age:12,

//     welcomeMess:function know(){
//         return `${this.username} is my name and i am ${this.age} years old!`
//     }

// }
// console.log(user.age)
// user.age=19
// console.log(user.age)

// function j(){
//     return `${this.username}` //this-only used within object. Inside function only it does not work.
// }
//console.log(j())

const a= ()=>{
    return "hello"  //arrow function
}
console.log(a())


const b=(n1,n2)=>{

    return n1+n2 //explicit return- return keyword necessary f wrapped in curly braces 
}
console.log(b(2,3));

const c=(n1,n2) =>  n1+n2 //implicit return- no curly braces
const d=(n1,n2) =>  (n1+n2) //if in parenthesis, no return keyword needed 

console.log(c(4,5));

//to return objects inside function it needs to be wrapped in (). 
const f=()=>({
    name:"jayni"
})

console.log(f(f.name))