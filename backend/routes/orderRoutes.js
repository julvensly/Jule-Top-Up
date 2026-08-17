const express = require("express");
 const router = express.Router();
 const {
  createOrder,
 getOrders,
 getMyOrders,
 validateOrder, 
  exchangeCommunity,
} = require("../controllers/orderController");
const { protect } = require("../middleware/authMiddleware");
 const { adminOnly } = require("../middleware/adminMiddleware");
// Créer commande
router.post("/",
 protect,
 createOrder);
// Admin wè commandes yo
router.get( "/",
 protect,
 adminOnly,
 getOrders );
// Utilisateur wè pwòp commandes li
router.get( "/my-orders",
 protect,
 getMyOrders );
// Admin valide commande
router.patch( "/:id/validate",
 protect,
 adminOnly, 
  validateOrder
);
// Responsable Community fè échange
router.post( "/community-exchange",
 protect, 
  exchangeCommunity
);
module.exports = router;
