const express = require("express");
 const router = express.Router();
 const { createOrder,
getOrders,
getMyOrders } = require("../controllers/orderController");
const { protect } = require("../middleware/authMiddleware");
const { adminOnly } = require("../middleware/adminMiddleware");
const {semiadminOnly } = require("../middleware/semiadminMiddleware");
router.post("/", protect, createOrder);
router.get("/", protect, adminOnly, getOrders);
router .get("/", protect, semiadminOnly, getOrders);
router.get("/my-orders", protect, getMyOrders);
module.exports = router;
