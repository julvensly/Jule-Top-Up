const mongoose = require("mongoose");
 const communitySchema = new mongoose.Schema(
  { communityId: { type: String, required: true, unique: true, index: true,
    },
    name: { type: String, required: true,
    },
    ownerId: { type: mongoose.Schema.Types.ObjectId, required: true,
    },
    // Lajan Community la ki soti nan exchange
    balance: { type: Number, default: 0,
    },
    // Kantite commandes validées ki disponib pou exchange
    validatedOrdersCount: { type: Number, default: 0,
    },
  },
  { timestamps: true,
  }
);
module.exports = mongoose.model("Community", communitySchema);
