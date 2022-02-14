function getOrderItems(req,res){
    res.render("../views/customer/orders/all-orders")
}

function addOrderItems(req,res,next){
    //
}

module.exports = {
    getOrderItems: getOrderItems,
    addOrderItems: addOrderItems,
};