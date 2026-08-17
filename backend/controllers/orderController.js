const mongoose = require("mongoose");
 const Order = require("../models/Order"); 
const Community = require("../models/Community");
 const User = require("../models/User");
// ===============================
//  CREER UNE COMMANDE 
// ===============================
const createOrder = async (req, res) => { try {
 const {
 service,
 plan,
 price, 
 paymentMethod,
 transactionId,
 playerId,
 communityId,
    } = req.body;
    const order = new Order({ userId: req.user.userId,
      // Nou pa mande non, email ak téléphone
      name: "",
      email: "",
       phone: "",
       service,
       plan,
       price,
        paymentMethod, 
      transactionId,
      playerId,
     communityId: communityId || "",
    });
    await order.save(); res.status(201).json({ success: true,
 message: "Commande  enregistrée avec succès.", order,
    });
  } catch (error) {
    console.error(error); res.status(500).json({
    success: false, message: "Le  serveur a un problème, veuillez réessayer plus tard.",
      error: error.message,
    });
  }
};
// ===============================
//  TOUTES LES COMMANDES 
// ===============================
const getOrders = async (req, res) => {
 try {
 const orders = await Order.find() 
      .sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ success: false,
 message: "Le serveur a un problème, veuillez réessayer plus tard.",
      error: error.message,
    });
  }
};
// ===============================
//  COMMANDES DE L'UTILISATEUR 
// ===============================
const getMyOrders = async (req, res) => {
 try {
 const orders = await  Order.find({
      userId: req.user.userId,
    }).sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ success: false,
 message: "Le serveur a un problème, veuillez réessayer plus tard.",
      error: error.message,
    });
  }
};
// ===============================
//  ADMIN VALIDE UNE COMMANDE 
// ===============================
const validateOrder = async (req, res) => {
 const session = await  mongoose.startSession();
 try {
    const { id } = req.params; session.startTransaction();
 const order = await 
    Order.findById(id).session(session);
 if (!order) {
      await session.abortTransaction(); return res.status(404).json({ success: 
        false, message: "Commande introuvable.",
      });
    }
    // Empêche une deuxième validation
    if (order.paymentStatus === "Payé") { await session.abortTransaction(); 
      return res.status(400).json({
        success: false, message: "Cette commande est déjà validée.",
      });
    }
    const price = Number(order.price);
 if (!Number.isFinite(price) || price <= 0) {
      await session.abortTransaction(); return res.status(400).json({ success: 
        false, message: "Prix de commande invalide.",
      });
    }
    // =====================================
    //  TOUT LE PRIX VA AU SOLDE ADMIN 
    // =====================================
    const admin = await User.findOne({ role: "admin",
    }).session(session);
    if (!admin) { await session.abortTransaction(); return 
      res.status(404).json({
        success: false, message: "Compte administrateur introuvable.",
      });
    }
    admin.balance = Number( (admin.balance + price).toFixed(2) ); await 
    admin.save({ session });
    // =====================================
    // SI COMMANDE COMMUNITY AJOUTE 1 COMMANDE VALIDEE
    // =====================================
    if (order.communityId) {
 const community = await Community.findOne({ 
        communityId: order.communityId,
      }).session(session);
      if (!community) { await session.abortTransaction(); return 
        res.status(404).json({
          success: false, message: "Community introuvable.",
        });
      }
      community.validatedOrdersCount = (community.validatedOrdersCount || 0) + 
        1;
      await community.save({ session });
    }
    // =====================================
    //  MARKE COMMANDE COMME VALIDEE 
    // =====================================
    order.paymentStatus = "Payé"; order.status = "Validée";
    // Tout pri commande a antre nan Admin
    order.profit = price; await order.save({ session }); await 
    session.commitTransaction(); res.status(200).json({
      success: true, message: "Commande validée avec succès.", order, 
      adminAmount: price, communityOrdersAdded: order.communityId ? 1 : 0,
    });
  } catch (error) {
    await session.abortTransaction(); console.error(error); 
    res.status(500).json({
      success: false, message: "Le serveur a un problème, veuillez réessayer plus tard.",
      error: error.message,
});
  } finally {
    session.endSession();
  }
};
// ===============================
// EXCHANGE COMMUNITY
// ===============================
const exchangeCommunity = async (req, res) => {
 const session = await  mongoose.startSession();
 try {
    const { communityId, ordersToExchange } = req.body;
 const quantity =  Number(ordersToExchange);
    // =====================================
    // VERIFIE QUANTITE 
    // =====================================
    if (
      !Number.isInteger(quantity) ||
      quantity < 50 ) { return res.status(400).json({ success: false,
 message: "Le minimum pour un échange est de 50 commandes.",
      });
    }
    // =====================================
    // COMMENCE TRANSACTION 
    // =====================================
    session.startTransaction();
    // =====================================
    // CHERCHE COMMUNITY 
    // =====================================
    const community = await Community.findOne({ communityId,
    }).session(session);
    if (!community) { await session.abortTransaction(); return res.status(404).json({ 
        success: false, message: "Community introuvable.",
      });
    }
    // =====================================
    // VERIFIE RESPONSABLE COMMUNITY 
    // =====================================
    if ( String(community.ownerId) !== String(req.user.userId) ) { await 
      session.abortTransaction(); return res.status(403).json({
        success: false, message: "Vous n'êtes pas responsable de cette Community.",
      });
    }
    // =====================================
    // VERIFIE COMMANDES DISPONIBLES 
    // =====================================
    const availableOrders = community.validatedOrdersCount || 0;
 if (quantity > availableOrders) {
      await session.abortTransaction(); return res.status(400).json({ success: false, 
        message:
          `Vous avez seulement ${availableOrders} commandes disponibles.`,
      });
    }
    // ===================================== 
    // 1 COMMANDE = 1 HTG 
    // =====================================
    const exchangeAmount = Number(quantity);
    // ===================================== 
    // CHERCHE ADMIN 
    // =====================================
    const admin = await User.findOne({ role: "admin",
    }).session(session);
    if (!admin) { await session.abortTransaction(); return res.status(404).json({ success: 
        false, message:
          "Compte administrateur introuvable.",
      });
    }
    // =====================================
    // VERIFIE SOLDE ADMIN 
    // =====================================
    if ( Number(admin.balance) < exchangeAmount ) { await session.abortTransaction(); return 
      res.status(400).json({
        success: false,
 message: "Le solde administrateur est insuffisant pour effectuer cet  échange.",
      });
    }
    // =====================================
    // RETIRE KOB SOU ADMIN 
    // =====================================
    admin.balance = Number( ( Number(admin.balance) - exchangeAmount ).toFixed(2) ); await 
    admin.save({ session });
    // =====================================
    // RETIRE COMMANDES COMMUNITY 
    // =====================================
    community.validatedOrdersCount = availableOrders - quantity;
    // =====================================
    // AJOUTE KOB NAN COMMUNITY 
    // =====================================
    community.balance = Number( ( Number(community.balance || 0) + exchangeAmount 
      ).toFixed(2)
    ); await community.save({ session });
    // =====================================
    // FIN TRANSACTION 
    // =====================================
    await session.commitTransaction(); res.status(200).json({ success: true, message: 
        "Échange effectué avec succès.",
      ordersExchanged: quantity, amountReceived: exchangeAmount, remainingOrders: 
        community.validatedOrdersCount,
      communityBalance: community.balance,
    });
  } catch (error) {
    await session.abortTransaction(); console.error(error); res.status(500).json({ success: 
      false, message:
        "Le serveur a un problème, veuillez réessayer plus tard.", error: error.message,
    });
  } finally {
    session.endSession();
  }
};
module.exports = { createOrder, getOrders, getMyOrders, validateOrder, exchangeCommunity,
};
