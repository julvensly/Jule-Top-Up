const Order = require("../models/Order");
 const createOrder = async (req, res) => {
  try {
 const {
 name,
 email,
 phone,
 service,
 plan, 
      price,
 paymentMethod,
 transactionId,
 playerId,
    } = req.body;
    const order = new Order({
 name,
 email,
 phone, 
      service,
 plan,
 price,
 paymentMethod, 
      transactionId,
 playerId,
    });
    await order.save(); res.status(201).json({ success: 
      true, message: "Commande enregistrée avec  succès.", order,
    });
  } catch (error) {
    res.status(500).json({ success: false,
 message: "Le serveur a un problème, veuillez réessayer plus tard.", error: error.message,
    });
  }
};
// Jwenn tout kòmann yo
const getOrders = async (req, res) => {
 try {
 const  orders = await Order.find(); 
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ success: false,
 message: "Le  serveur a un problème, veuillez réessayer plus  tard.", error: error.message,
    });
  }
};
module.exports = {
 createOrder,
 getOrders,
};
