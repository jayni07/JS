//for each neevr returns va;ues so a constant wont return ti

// const num=[1,2,3,4,5,6]

// num.filter((num)=>num>3)  //give condition as per the values
// console.log(num);


//map-changes the value according to conditions
// const arr=[1,2,3,4,5,6,12,40,80]
// console.log(arr.map((a)=> a*a))

// console.log(arr.map((b)=>b+10).map((b)=>b*10))//chaining-using multiple methods.


// console.log(arr.reduce((c)=>{return c>3 && c%2===0})) //filter-filters the results according to the needs


const arr1=[9,8,7,3,4,5]
console.log(arr1.reduce((a,c)=>a+c,0))