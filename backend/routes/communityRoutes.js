const express = require("express");
 const router = express.Router();
 const Community = require("../models/Community");
 const Order = require("../models/Order");
 const communityPages = require("../config/communityPages");
 const { getCommunityOrders,
} = require("../controllers/communityOrderController");
// =====================================
// COMMANDES D'UNE COMMUNITY
// =====================================
router.get("/:communityId/orders", getCommunityOrders);
// =====================================
// INFORMATIONS  D'UNE COMMUNITY
// =====================================
router.get("/:communityId", async (req, res) => {
 try { 
    const { communityId } = req.params;
    // Chèche Community a nan MongoDB
    const community = await Community.findOne({ 
      communityId,
    });
    if (!community) { return res.status(404).json({ 
        success: false,
 message: "Community introuvable",
      });
    }
    // Backend la detèmine ki configuration Community a 
    // genyen
    const pageConfig = communityPages[community.name]; 
    if (!pageConfig) {
      return res.status(404).json({ success: false, 
        message:
 "Aucune page configurée pour cette Community",
      });
    }
    // Chèche commandes Community a
    const orders = await Order.find({ communityId,
    }).sort({
      createdAt: -1,
    });
    // Voye Community + configuration page la bay 
    // frontend
    res.status(200).json({
 success: true,
 community: { 
        communityId: community.communityId,
 name: community.name,
 ownerId: community.ownerId, 
 balance: community.balance, 
 validatedOrdersCount: community.validatedOrdersCount,
      },
      page: pageConfig, orders,
    });
  } catch (error) {
    console.error("Erreur Community:", error); 
    res.status(500).json({
      success: false,
 message: "Erreur du serveur",
    });
  }
});
module.exports = router;
