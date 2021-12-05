const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConversationSchema = new Schema(
{
    members: {
      type: Array,
    },
    isDeleted: {
      type: Schema.Types.Boolean,
      default: false,
    }
  },  { timestamps: true }
);

let ConversationModel = mongoose.model(
  "conversations",
  ConversationSchema
);

module.exports = ConversationModel;
