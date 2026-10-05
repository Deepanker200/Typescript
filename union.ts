function fruitsData(item:number):string | string[]{
    
    if(item>1){
        return ["Apple","Mango","Grapes"]
    }else{
        return "Apple"
    }
}

console.log(fruitsData(6))