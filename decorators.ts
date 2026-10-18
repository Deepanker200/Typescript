function classLogger(constructor:Function){
    console.log(constructor.name);
}


function getKeyDetails(target:any,key:any){
    console.log(key);
}

@classLogger
class CustomMaths123{

    @getKeyDetails
    private value1:number
    value2:number

    constructor(x:number,y:number){
        this.value1=x
        this.value2=y
    }
}

// var cm1=new CustomMaths123(10,20)