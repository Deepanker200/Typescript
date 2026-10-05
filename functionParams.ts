function totalPrice(item:number,price:number,text?:string){
    if(text){
        console.log(text,price*item);
    }else{
        console.log(price*item);
        
    }
}

totalPrice(5,60,"Total price is:")
totalPrice(5,60)

function simple(data:any){
    console.log(data);
}

simple("Deep")