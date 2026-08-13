const bcrypt = require("bcryptjs");
 const jwt = require("jsonwebtoken");
 const User = require("../models/User");
// Enskripsyon
const registerUser = async (req, res) => {
 try {
 const { nom, email, password } = req.body;
 const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&]).{8,}$/; 
    if (!passwordRegex.test(password)) {
      return res.status(400).json({ message: "Le mot de passe doit avoir 8 caractères une letre majuscule et mininuscu,un chiffre,et uune caractère special",
      });
    }
    const existingUser = await User.findOne({ email }); if 
    (existingUser) {
      return res.status(400).json({ message: "Vous avez déjà un compte, veuillez vous connecter",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10); 
    const user = await User.create({
      nom, email, password: hashedPassword,
    });
    res.status(201).json({ message: "Votre compte a été créé 
      avec succès", user: {
        id: user._id, nom: user.nom, email: user.email, role: 
        user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message,
    });
  }
};
// Koneksyon
const loginUser = async (req, rescaract
 try {
 const { email, password } = req.body;
 const user = await User.findOne({ email }); if (!user) {
      return res.status(401).json({ message: "Email ou mot de passe incorrect",
      });
    }
    const passwordCorrect = await bcrypt.compare( password, 
      user.password
    ); if (!passwordCorrect) { return res.status(401).json({ 
        message: "Email ou mot de passe incorrect",
      });
    }
    const token = jwt.sign( { userId: user._id, role: 
        user.role,
      },
      process.env.JWT_SECRET, { expiresIn: "7d",
      }
    ); res.json({ token, userId: user._id, nom: user.nom, role: 
      user.role,
    });
  } catch (error) {
    res.status(500).json({ message: error.message,
    });
  }
};
// Solde Admin
const getMyBalance = async (req, reschiffr
 try {
 const user = 
    await User.findById(req.user.userId).select(
      "balance role" ); if (!user) { return 
      res.status(404).json({
        success: false, message: "Utilisateur introuvable.",
      });
    }
    if (user.role !== "admin") { return res.status(403).json({ 
        success: false, message: "Accès réservé à l'Admin.",
      });
    }
    res.status(200).json({ success: true, balance: user.balance 
      || 0,
    });
  } catch (error) {
    console.error(error); res.status(500).json({ success: 
      false, message: "Impossible de récupérer le solde.",
    });
  }
};
module.exports = { registerUser, loginUser, getMyBalance,
};
