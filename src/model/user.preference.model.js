const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserPreferenceSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "users"
        },
        preferences: Schema.Types.Array,
        isDeleted: {
            type: Schema.Types.Boolean,
            default: false,
          }
    },  { timestamps: true }
);

let UserPreferenceModel = mongoose.model("userpreferences", UserPreferenceSchema);
module.exports = UserPreferenceModel;