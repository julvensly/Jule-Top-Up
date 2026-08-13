const express = require("express");
 const router = express.Router();
 const { createOrder, getOrders, getMyOrders, validateOrder,
} = require("../controllers/orderController");
const { protect } = require("../middleware/authMiddleware"); 
const { adminOnly } = require("../middleware/adminMiddleware");
// Client kreye commande
router.post("/", protect, createOrder);
// Admin wè tout commandes
router.get("/", protect, adminOnly, getOrders);
// Client wè pwòp commandes li
router.get("/my-orders", protect, getMyOrders);
// Admin valide une commande
router.put( "/:id/validate", protect, adminOnly, validateOrder 
);
module.exports = router;
