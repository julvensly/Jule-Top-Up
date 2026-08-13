const Order = require("../models/Order");
 const Community = require("../models/Community");
 const User = require("../models/User");
 const createOrder = async (req, res) => {
  try {
 const { name, email, phone, service, plan, price, 
      paymentMethod, transactionId, playerId, communityId,
    } = req.body;
    const order = new Order({ userId: req.user.userId,
 name:  name || "",
 email: email || "",
 phone: phone || "", 
      service, plan, price, paymentMethod, transactionId, 
      playerId, communityId: communityId || "",
    });
    await order.save(); res.status(201).json({ success: true, 
      message: "Commande enregistrée avec succès.", order,
    });
  } catch (error) {
    console.error(error); res.status(500).json({ success: 
      false, message:
        "Le serveur a un problème, veuillez réessayer plus tard.",
      error: error.message,
    });
  }
};
const getOrders = async (req, res) => {
 try {
 const orders =  await Order.find().sort({ createdAt: -1 }); 
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ success: false, message: "Le serveur a un problème, veuillez réessayer plus tard.",
      error: error.message,
    });
  }
};
const getMyOrders = async (req, res) => {
 try {
 const orders = await Order.find({
      userId: req.user.userId,
    }).sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ success: false, message: "Le serveur a un problème, veuillez réessayer plus tard.",
      error: error.message,
    });
  }
};
// ADMIN VALIDE UNE COMMANDE
const validateOrder = async (req, res) => {
 try {
 const { id } = req.params;
 const order = await Order.findById(id); if (!order) {
      return res.status(404).json({ success: false, message: 
        "Commande introuvable.",
      });
    }
    // Empêche une deuxième validation
    if (order.paymentStatus === "Payé") { return 
      res.status(400).json({
        success: false, message: "Cette commande est déjà validée.",
      });
    }
    const price = Number(order.price); if 
    (!Number.isFinite(price) || price <= 0) {
      return res.status(400).json({ success: false, message: 
        "Prix de commande invalide.",
      });
    }
    // 7.1% pour l'Admin
    const adminProfit = Number((price * 0.071).toFixed(2));
    // 92.9% pour la Community
    const communityAmount = Number( (price - 
      adminProfit).toFixed(2)
    );
    // Si c'est une commande Community
    if (order.communityId) {
 const community = await Community.findOne({
        communityId: order.communityId,
      });
      if (!community) { return res.status(404).json({ success: 
          false, message: "Community introuvable.",
        });
      }
      // Ajouter 7.1% au solde de l'Admin
      await User.findByIdAndUpdate(req.user.userId, { $inc: { 
          balance: adminProfit,
        },
      });
      // Ajouter 92.9% au solde de la Community
      await Community.findOneAndUpdate( { communityId: 
          order.communityId,
        },
        { $inc: { balance: communityAmount,
          },
        }
      );
    } else {
      // Commande normale : les 7.1% vont quand même au solde 
      // Admin
      await User.findByIdAndUpdate(req.user.userId, { $inc: { 
          balance: adminProfit,
        },
      });
    }
    order.paymentStatus = "Payé"; order.status = "Validée"; 
    order.profit = adminProfit; await order.save(); 
    res.status(200).json({
      success: true, message: "Commande validée avec succès.", 
      order, adminProfit, communityAmount: order.communityId
        ? communityAmount
        : 0,
    });
  } catch (error) {
    console.error(error); res.status(500).json({ success: 
      false, message:
        "Le serveur a un problème, veuillez réessayer plus tard.",
      error: error.message,
    });
  }
};
module.exports = { createOrder, getOrders, getMyOrders, 
  validateOrder,
};
