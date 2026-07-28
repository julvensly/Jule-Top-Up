const mongoose = require("mongoose");
 const dotenv = require("dotenv");
 const User = require("./models/User"); dotenv.config(); mongoose
  .connect(process.env.MONGO_URI) .then(async () => { 
    const admin = await User.create({
      nom: "Admin", email: "julefrannecia@gmail.com", 
      password: "a2009m02j23", role: "admin",
    });
    console.log("Admin kreye:", admin); 
    mongoose.connection.close();
  })
  .catch((err) => { console.log(err);
  });
