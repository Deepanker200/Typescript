function fruits():number{
    return 10
}

function simple(){
    return true
}

function complex():number|string|boolean{
    let age=23
    let name="Deepanker"

    if(age>18){
        return age
    }else{
        return name
    }
}

function anything():any{
    return true
}

console.log(complex());
