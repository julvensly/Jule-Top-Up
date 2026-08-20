const Order = require("../models/Order");
 const Community = require("../models/Community");
// Commandes yon Community
const getCommunityOrders = async (req, res) => {
 try { 
    const { communityId } = req.params;
    // Verifye Community a egziste
    const community = await Community.findOne({ communityId });
 if (!community) {
      return res.status(404).json({ success: false, 
        message: "Community introuvable.",
      });
    }
    // Pran sèlman commandes ki pou Community sa a
    const orders = await Order.find({ communityId,
    }).sort({
      createdAt: -1,
    });
    res.status(200).json({ success: true, communityId, 
      orders,
    });
  } catch (error) {
    console.error("Erreur commandes Community:", error); 
    res.status(500).json({
      success: false, message: "Erreur du serveur.", 
      error: error.message,
    });
  }
};
module.exports = { getCommunityOrders,
};
