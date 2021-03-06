const express = require("express");

const router = express.Router();
const userController = require("../controllers/user.controller");


router.get("/signup", userController.getSignup);
router.post("/signup", userController.signup);
router.get("/login", userController.getLogin);

module.exports = router;
