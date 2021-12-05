const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActivitySchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "users"
        },
        title: Schema.Types.String,
        summary: Schema.Types.String,
        image: Schema.Types.String,
        discussion:[{
        userId:{
                type: Schema.Types.ObjectId,
                ref: "users"
            },
        comment: Schema.Types.String
        }],
        isDeleted: {
            type: Schema.Types.Boolean,
            default: false,
          }
    } ,  { timestamps: true }
);

let ActivityModel = mongoose.model("activities", ActivitySchema);
module.exports = ActivityModel;