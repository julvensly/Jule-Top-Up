const mongoose = require("mongoose");
 const messageSchema = new mongoose.Schema(
  { userId: { type: String, required: true,
    },
    sender: { type: String, required: true,
    },
    receiver: { type: String, default: "admin",
    },
    text: { type: String, required: true,
    },
  },
  { timestamps: true } );
module.exports = mongoose.model("Message", messageSchema);
