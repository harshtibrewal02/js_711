// Nested Scope

function one(){
    const username="Harsh"

    function two(){
        const website="Youtube"
        //console.log(username);
        //console.log(website);
    }
    

    two()

}

///one()

if(true){
    const username="HARSH"
    if(username === "HARSH"){
        const website="YOUTUBE "
        //console.log(website + username);
    }
    //console.log(website);
}
//console.log(username);

// ++++++++++++++++++++++++++++++++  Intresting +++++++++++++++++++++++++++++++++++++++

function addone(num){
    return num + 1
}
addone(5)