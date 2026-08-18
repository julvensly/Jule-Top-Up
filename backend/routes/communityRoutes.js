const express = require("express");
 const router = express.Router();
 const Community = require("../models/Community");
 const Order = require("../models/Order");
 router.get("/:communityId", async (req, res) => {
  try {
 const { communityId } = req.params;
 const community = await Community.findOne({
 communityId 
    });
    if (!community) { return res.status(404).json({ 
        success: false,
    message: "Community introuvable",
      });
    }
    const orders = await Order.find({ communityId }) 
      .sort({ createdAt: -1 });
    res.status(200).json({
 success: true,
 community: { 
        communityId: community.communityId,
 name: community.name,
 ownerId: community.ownerId, 
        balance: community.balance, 
        validatedOrdersCount: community.validatedOrdersCount,
      },
      orders,
    });
  } catch (error) {
    console.error("Erreur Community:", error); 
    res.status(500).json({
      success: false, message: "Erreur du serveur",
    });
  }
});
module.exports = router;
