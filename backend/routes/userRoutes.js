const express = require("express");
 const router = express.Router();
 const {  registerUser, loginUser,
} = require("../controllers/userController");
// Enskripsyon
router.post("/register", registerUser);
// Koneksyon
router.post("/login", loginUser);
router.get("/", async (req, res) => {
 const User =   require("../models/User"); try {
    const users = await User.find(); res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message
    });
  }
});
module.exports= router;
