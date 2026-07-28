const Message = require("../models/Message");
const User = require("../models/User");
// Voye yon mesaj
const sendMessage = async (req, res) => { try {
 const {  userId, sender, receiver, text } = req.body;
 const  message = await Message.create({
      userId, sender, receiver, text,
    });
    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Admin wè tout mesaj yo
const getMessages = async (req, res) => { try {
 const  messages = await Message.find().sort({ createdAt: 1 
    });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Lis kliyan ki ekri admin
const getConversations = async (req, res) => { try { 
    const conversations = await Message.aggregate([
      { $sort: { createdAt: 1
        }
      },
      { $group: { _id: "$userId", lastMessage: { $last: 
          "$text" }, lastDate: { $last: "$createdAt" }
        }
      }
    ]);
 const result = []; for (const conv of conversations) {
      const user = await User.findById(conv._id); 
      result.push({
        userId: conv._id, nom: user ? user.nom : "Kliyan  enkoni", lastMessage: conv.lastMessage, 
        lastDate: conv.lastDate
      });
    }
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message
    });
  }
};
// Yon kliyan wè sèlman mesaj pa li
const getUserMessages = async (req, res) => { try { 
    const messages = await Message.find({
      userId: req.params.userId,
    }).sort({ createdAt: 1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { sendMessage, getMessages,
  getConversations, getUserMessages,
};
