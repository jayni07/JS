//JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime

//symbol-primitive datatype that's guaranteed to be unique.
//Symbols are often used to add unique property keys to an object that won't collide
// with keys any other code might add to the object, and which are hidden from any mechanisms other code will typically use to access the object.
//That enables a form of weak encapsulation, or a weak form of information hiding


let con = 34;
const bigNumber=923454444444678901239999999n; //n here makes it bigInt


//non primitves

const heroes=["spiderman","captain america"]

const vari=
{
    name:"jayni"  , //object adn we can make it in a variable too!
    year:"4th"
}

const myFunc=function(){
    console.log("he");
}

const id=Symbol("123")
const anotherId=symbol("123")
