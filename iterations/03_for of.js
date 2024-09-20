//["",""]
//[{},{}]
//for of

// const arr=[1,2,3,4,5,6]

// for(const i of arr){
//     console.log(i)
// }

// const greetings="greeting"
// for(const greet in greetings){
//     console.log(`each character is ${greet}`)
// }

//maps

const map=new Map()
map.set("IN","India")
map.set("Usa","United states of america")

console.log(map);
//iterable through for of
for(const [key,value] of map){
    console.log(key,"-",value);
}


const obj={
    "game1":"NFS",
    "game":"spider" //not iterable through this for(const iteretaor for format)
}

for(const [key,value] of obj){
    console.log(key,"-",value);
}