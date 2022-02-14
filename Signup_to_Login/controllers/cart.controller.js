function getCartItems(req,res){
    res.render("../views/customer/cart/all-cart-items")
}

function addCartItems(req,res,next){
    //
}

function updateCartItems(req,res,next){
    //
}

module.exports = {
    getCartItems: getCartItems,
    addCartItems: addCartItems,
    updateCartItems: updateCartItems,
};