const express = require("express");

const orderController = require("../controllers/order.controller");

const router = express.Router();

router.get("/order", orderController.getOrderItems);



module.exports = router;