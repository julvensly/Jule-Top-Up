const express = require("express");
 const router = express.Router();
 const Community = require("../models/Community");
 const Order = require("../models/Order");
// Jwenn enfòmasyon Community
router.get("/:communityId", async (req, res) => {
 try {
 const 
    community = await Community.findOne({
      communityId: req.params.communityId,
    });
    if (!community) { return res.status(404).json({ message: 
        "Community introuvable",
      });
    }
    res.json({ communityId: community.communityId, name: 
      community.name, balance: community.balance,
    });
  } catch (error) {
    console.error(error); res.status(500).json({ message: 
      "Erreur du serveur",
    });
  }
});
// Jwenn commandes Community la
router.get("/:communityId/orders", async (req, res) => { try { 
    const { communityId } = req.params;
    // Verifye Community a
    const community = await Community.findOne({ communityId,
    });
    if (!community) { return res.status(404).json({ success: 
        false, message: "Community introuvable",
      });
    }
    // Jwenn sèlman commandes Community sa a
    const orders = await Order.find({ communityId,
    }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, orders,
    });
  } catch (error) {
    console.error("Erreur commandes Community:", error); 
    res.status(500).json({
      success: false, message: "Erreur du serveur",
    });
  }
});
module.exports = router;
