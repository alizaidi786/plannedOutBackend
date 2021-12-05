const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlanSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "users"
        },
        plan:[{
            date: Schema.Types.Date,
            text: Schema.Types.String
        }],
        isDeleted: {
            type: Schema.Types.Boolean,
            default: false,
          }
    }, { timestamps: true }
);

let PlanModel = mongoose.model("plans", PlanSchema);
module.exports = PlanModel;