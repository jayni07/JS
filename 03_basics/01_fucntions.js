// function sum(number1,number2){
//     return number1+number2;
// }

// const res=sum(2,3)
// console.log(res)

function login(username){
    if(!username){
        console.log("please enter username!");
        return;
    }
    return `${username} just logged in!`; //if and else condn put up because if someone enters nothing then it will give UNDEFINED
} 

console.log(login("jayni"));


const user={
    username1:"jayni",
    price:12000
}

function info(getAny){
    return `${getAny.username1} is my name and price for thing is ${getAny.price}`
}

console.log(info(user))

const arr=[1,2,3,4,5]

function val(arr){
    return `${arr[1]}  is the second element`
}
console.log(val(arr))