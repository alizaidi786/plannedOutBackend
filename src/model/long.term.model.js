const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LongTermSchema = new Schema(
    {
        title: Schema.Types.String,
        description: Schema.Types.String,
        startDate: Schema.Types.String,
        finishDate: Schema.Types.String,
        shortTerm: Schema.Types.Array,
        isDeleted: {
            type: Schema.Types.Boolean,
            default: false,
          }
    }, { timestamps: true }
)

let LongTermModel = mongoose.model("longterms", LongTermSchema)
module.exports = LongTermModel