const express = require("express");
 const router = express.Router(); 
const { protect } = require("../middleware/authMiddleware");
 const { adminOnly } = require("../middleware/adminMiddleware"); 
const {sendMessage, getMessages, getConversations, 
  getUserMessages,
} = require("../controllers/messageController");
// Kliyan voye mesaj (moun ki konekte sèlman)
router.post("/", protect, sendMessage);
// Admin wè tout mesaj
router.get("/", protect, adminOnly, getMessages);
// Admin wè lis konvèsasyon yo
router.get( "/conversations", protect, adminOnly, 
  getConversations
);
// Kliyan oswa admin wè mesaj yon kliyan
router.get( "/:userId", protect, getUserMessages );
module.exports = router;
