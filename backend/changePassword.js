const mongoose = require("mongoose");
 const dotenv = require("dotenv");
 const User = require("./models/User"); dotenv.config(); mongoose
  .connect(process.env.MONGO_URI) .then(async () => { 
    await User.updateOne(
      { email: "julefrannecia@gmail.com" }, { password: 
        "a2009m02j22" 
      }
    ); console.log("Modpas chanje avèk siksè"); 
    mongoose.connection.close();
  })
  .catch((err) => console.log(err));
