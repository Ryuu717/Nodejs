function getAllProducts(req,res){
    res.render("../views/customer/products/all-products");
}

function getProductDetails(req,res){
    res.render("../views/customer/products/product-detail")
}

module.exports = {
    getAllProducts: getAllProducts,
    getProductDetails: getProductDetails
};