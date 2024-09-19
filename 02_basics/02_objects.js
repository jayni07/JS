//singleton
//object.create


//obj literals--> keys & values
//const mysim=Symbol(key);
// const myObj={
//     name:"jayni",
//     year:4,
//     gender:"female",
//     login:["monday","tuesday"],
//     [mysim]:"my",

// };

// console.log(myObj.login); //not preferred, not a good practice as the key is by default taken as string but if is given like "name" then there is no way it can be accessed like this.
// console.log(myObj["login"]);

//myObj.gender=male;
//Object.freeze(gender); //freeze the object


// myObj.greeting=function(){
//     console.log("hello");
// }

// myObj.greeting2=function(){
//     console.log(`hello, ${this.name}`);
// }

// console.log(myObj.greeting());
// console.log(myObj.greeting2());


const user={};
user.id=1;
user.name="jj",
user.grade=7

console.log(user);
