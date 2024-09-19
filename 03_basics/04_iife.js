//immediately invoked function expressions
//to avoid global pollution done due to using global scope variables iife is used
//Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined. 
//They are typically used to create a local scope for variables to prevent them from polluting the global scope.

(function chai(){
    console.log("IIFE")
})();  // ; here is used to end the iife that is being used otherwise it will keep running and other functions won't run


((name)=>{
    console.log(`${name} is my name`);
})("jayni");