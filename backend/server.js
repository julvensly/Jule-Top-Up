const express = require("express");
 const cors = require("cors");
 const mongoose = require("mongoose");
 const dotenv = require("dotenv"); dotenv.config();
 const orderRoutes = require("./routes/orderRoutes");
  const app = express();
const messageRoutes = require("./routes/messageRoutes");
const userRoutes = require("./routes/userRoutes");
 app.use(cors());
 app.use(express.json());
app.use("/api/orders", orderRoutes);
 app.use("/api/messages", messageRoutes); 
app.use("/api/users", userRoutes);
 const PORT = process.env.PORT || 5000; 
 mongoose
  .connect(process.env.MONGO_URI)
 .then(() => { console.log("MongoDB konekte  avèk siksè");
 app.listen(PORT, () => {
      console.log(`Server ap kouri sou port ${PORT}`);
    });
  })
  .catch((err) => { console.log("Erè MongoDB:", err);
  });
