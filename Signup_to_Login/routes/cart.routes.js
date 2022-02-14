const express = require("express");

const cartController = require("../controllers/cart.controller");

const router = express.Router();

router.get("/cart", cartController.getCartItems);



module.exports = router;