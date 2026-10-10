class Product {
    private name: string
    protected price: number
    pId: number
    inCart = false  //type inference
    isOrdered:boolean = false   //explicit type annotation

    constructor(name: string, price: number, pId: number) {
        this.name = name
        this.price = price
        this.pId = pId
    }

    addToCart(): void {
        this.inCart = true
    }

    buyProduct() {
        if (this.inCart) {
            return `product ${this.name} is ordered in ${this.price}`
        }
        else {
            return `no product in cart`
        }
    }
}


class Order extends Product{
    constructor(){
        super('Laptop',50000,401)
    }

    getPrice(){
        return this.price
    }
}


class Order1 extends Product{
  
    constructor(name:string,price:number,pId:number){
        super(name,price,pId)
    }

    getPrice(){
        return this.price
    }
}




var product = new Product("Samsung", 100000, 101)
product.addToCart()
console.log(product.buyProduct());


// console.log(product.price);

// Access Modifiers
var order=new Order()
console.log(order.getPrice());

