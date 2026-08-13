const express = require("express");
 const router = express.Router();
 const {registerUser, loginUser, getMyBalance,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");
// Enskripsyon
router.post("/register", registerUser);
// Koneksyon
router.post("/login", loginUser);
// Jwenn tout utilisateurs
router.get("/", async (req, res) => {
 const User =  require("../models/User"); try {
    const users = await User.find(); res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message,
    });
  }
});
// Solde Admin konekte
router.get( "/my-balance", protect, getMyBalance );
module.exports = router;
