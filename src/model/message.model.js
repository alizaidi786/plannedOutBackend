const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema(
  {
    conversationId: {
      type: Schema.Types.ObjectId,
      ref: "conversations"
    },
    sender: {
      type: Schema.Types.ObjectId,
      ref:"users"
    },
    text: {
      type: String,
    },
    isDeleted: {
      type: Schema.Types.Boolean,
      default: false,
    }
  },
  { timestamps: true }
);

let Messagemodel = mongoose.model("messages", MessageSchema);

module.exports = Messagemodel;
