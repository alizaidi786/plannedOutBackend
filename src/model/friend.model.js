const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FriendSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "users"
        },
        friendsId: {
            type: Schema.Types.ObjectId,
            ref: "users"
        },
        isDeleted: {
            type: Schema.Types.Boolean,
            default: false,
          }
    },  { timestamps: true }
);

let FriendModel = mongoose.model("friends", FriendSchema);
module.exports = FriendModel;