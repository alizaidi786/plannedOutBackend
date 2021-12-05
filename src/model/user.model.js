const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    userName: Schema.Types.String,
    email: Schema.Types.String,
    password: Schema.Types.String,
    profilePic: Schema.Types.String,
    /*friends: Schema.Types.Array,*/
    isDeleted: {
      type: Schema.Types.Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

let UserModal = mongoose.model("users", UserSchema);

module.exports = UserModal;
