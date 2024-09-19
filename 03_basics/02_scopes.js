
if(true)
{
    const a=10
    let b=20
    var c=70    
}

// console.log(a)
// console.log(b)
console.log(c)

function one(){                 //in nested functions child is able to access parent variables
    const username="ashg"

    function two(){
        const website="yt"
        console.log(username)
    }
    console.log(website)  
    two()

}
one()