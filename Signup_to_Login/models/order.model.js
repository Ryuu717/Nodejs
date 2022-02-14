class Order{
    constructor(cart, userData, date, status="Pending", orderId){
        this.productionData = cart;
        this.userData = userData;
        this.date = new Date(date);
        this.id = orderId;
    }
}


module.exports = Order;
