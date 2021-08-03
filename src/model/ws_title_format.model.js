const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WsCategorySchema = new Schema({
    titleId: {
        type: Schema.Types.ObjectId,
        ref: "ws_titles"
    },
    name: Schema.Types.String,
    isActive: Schema.Types.Boolean,
    guideline: Schema.Types.String,
    headerInstruction: Schema.Types.String,
    approxTime: Schema.Types.Number,
    isDeleted: {
        type: Schema.Types.Boolean,
        default: false
    },
}, {
    timestamps: true
})
let WsCategoryModel = mongoose.model('ws_title_formats', WsCategorySchema);
module.exports = WsCategoryModel;