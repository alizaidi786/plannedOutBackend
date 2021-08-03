const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WsThemeSchema = new Schema({
    name: Schema.Types.String,
    date: Schema.Types.Date,
    remarks: Schema.Types.String,
    isDeleted: {
        type: Schema.Types.Boolean,
        default: false
    },
}, {
    timestamps: true
})
let WsThemeModel = mongoose.model('ws_themes', WsThemeSchema);
module.exports = WsThemeModel;