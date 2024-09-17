// const myArr=[1,2,3,4,5]
// console.log(myArr);
// myArr.push(6);
// console.log(myArr);
// console.log(myArr.includes(2));
// console.log(myArr.indexOf(2));


// const newArr=myArr.join(); //converts into string
// console.log(newArr);

// slice and spice

// const m1=myArr.slice(1,3);
// const m2=myArr.splice(1,3);
// console.log(m1);
// console.log(m2);

//using join will only join arr within arr

const heroes=["spiderman","ironman"];
const dc=["superman","batman"];

const h=heroes.concat(dc);
console.log(h);

// const e=[...dc,...heroes];
// console.log(e);


const arr=[1,2,[3,4,5,[1,2],3],2,3];
const arr1=arr.flat(Infinity);
console.log(arr1);


const ar1=[1,2,3,4];
const ar2=[2,3,4];
const a=ar1.concat(ar2);
console.log(a);

//at,of,
//The Array.from() method returns an array from any object with a length property.
const L="jayni"//The Array.from() method returns an array from any iterable object.
const c=L.from()
console.log(c);
