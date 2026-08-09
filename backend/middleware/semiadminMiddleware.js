const adminOnly = (req, res, next) => {
 if (!req.user || req.user.role 
 !== "semiadmin") {
    return res.status(403).json({
 message: "accès reserver a l'administrateur",
    });
  }
  next();
};
module.exports = { semiadminOnly };
