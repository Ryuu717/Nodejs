class Cart{
    constructor(items=[], totalQuantity=0, totalPrice=0){
        this.items = items;
        this.totalQuantity = totalQuantity;
        this.totalPrice = totalPrice;
    }
}


module.exports = Cart;
