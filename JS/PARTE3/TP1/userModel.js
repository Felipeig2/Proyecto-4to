const mongoose = require('mongoose');

// Define el esquema con las opciones de timestamps y sin versionKey
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const ModelUser = mongoose.model("users", userSchema);
module.exports = ModelUser;

/*const mongoose = require('mongoose');
const userModel = new mongoose.Schema(
  {
    name: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String
    }, {
      timestamps:true,
      versionKey:false,
    }
  }
)
const ModelUser = mongoose.model("users", userSchema);
module.exports = ModelUser; */