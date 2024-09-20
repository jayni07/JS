const email=[]

if(email){
    console.log("got email");  
}

else{
    console.log("nvm");  
}

//falsy

//false,0,-0, BigInt 0n,"", null,undefined, NaN

//truthy
//"0",'false',"",[],{},function()-empty function

if(email.length===0){
    console.log("array is empty!")
}

const anotheronj={}
if(Object.keys(anotheronj).length===0){
    console.log("obj is empty");
    
}

//nullish coalescing operator

let val1;
val1=5 ?? 10
val2=null ?? 10
val3=null ?? 3 ?? 6

console.log(val1);

//terniary operator

const iceTeaPrice=100

iceTeaPrice <=80 ? console.log("less than 80") :console.log("greater than 80!")
