const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShortTermSchema = new Schema(
    {
        title: Schema.Types.String,
        description: Schema.Types.String,
        startDate: Schema.Types.String,
        finishDate: Schema.Types.String,
        longTerm: {
            type: Schema.Types.ObjectId,
            ref:"longterms"
        },
        isDeleted: {
            type: Schema.Types.Boolean,
            default: false,
          }
    }, { timestamps: true }
)

let ShortTermModel = mongoose.model("shortterms", ShortTermSchema)
module.exports = ShortTermModel