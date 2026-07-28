const express = require("express");
 const router = express.Router();
 const { createOrder,getOrders } = require("../controllers/orderController");
const { protect } = require("../middleware/authMiddleware");
const { adminOnly } = require("../middleware/adminMiddleware");

router.post("/", protect, createOrder);
router.get("/", protect, adminOnly, getOrders);
module.exports = router;
