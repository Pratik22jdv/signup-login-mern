const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    employeeid: {
        type: String,
    },
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
    },
    dob: {
        type: String,
    },
    contact: {
        type: Number,
    },
    password: {
      type: String,
    },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("e111915094_Employee_Detail", UserSchema);
