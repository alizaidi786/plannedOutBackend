const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WsCategorySchema = new Schema({
    titleId: {
        type: Schema.Types.ObjectId,
        ref: "ws_titles"
    },
    formatId: {
        type: Schema.Types.ObjectId,
        ref: "ws_title_formats"
    },
    target: Schema.Types.String,
    targetDate: Schema.Types.Date,
    availableWs: {
        type: Schema.Types.Number,
        default: 0
    },
    refWsLink: Schema.Types.String,
    bodyImageFolder: Schema.Types.String,
    contentFolder: Schema.Types.String,
    // designFormat: Schema.Types.String,
    answerType: Schema.Types.String,
    designBy: [{
        type: Schema.Types.ObjectId,
        ref: "users"
    }],
    contentBy: [{
        type: Schema.Types.ObjectId,
        ref: "users"
    }],
    remarks: Schema.Types.String,
    isDeleted: {
        type: Schema.Types.Boolean,
        default: false
    },
}, {
    timestamps: true
})
let WsCategoryModel = mongoose.model('ws_title_mis', WsCategorySchema);
module.exports = WsCategoryModel;