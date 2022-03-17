const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    employeeid: {
        type: String,
    },
    fullname: {
        type: String,
        require: true
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
