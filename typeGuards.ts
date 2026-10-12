let userData20:number|string|boolean="Deepanker Tiwari"

userData20=true
if(typeof userData20=="boolean"){
    console.log("This is a bool data type");
}else if(typeof userData20=="string"){
    console.log("This is a string data type");
}else{
    console.log("This is a number");
}

function checkData(data:string|number){
    if(typeof data=="number"){
        console.log("This is a number");
    }else{
        console.log("This is a string");
    }
}

checkData(22)


class Product21{

}

var p1=new Product21()

class Order21{

}

var o1=new Order21()


function checkDetails(data:Order21|Product21){
    if (data instanceof Order21){
        console.log("This is an order");
    }
    else{
        console.log("This is a product");
    }
}

checkDetails(o1)

interface userData{
    name:string
    city:string
}

interface userInfo{
    id:number
    email:string
}

var userData22: userData | userInfo

userData22={
    name:"Deep",
    city:"Delhi"
}

var userData21:userData |userInfo={
    id:100,
    email:"deep@test.com"
}

function checkUserInfo(data:userData | userInfo){
    if((data as userData).name!=undefined){
        console.log("This is user data");
    }
    else{
        console.log("This is a user info");
    }
}

checkUserInfo(userData21)