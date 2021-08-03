const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WsGradeSchema = new Schema({
    name: Schema.Types.String,
    remarks: Schema.Types.String,
    fromAge: Schema.Types.Number,
    toAge: Schema.Types.Number,
    isDeleted: {
        type: Schema.Types.Boolean,
        default: false
    },
}, {
    timestamps: true
})
let WsGradeModel = mongoose.model('ws_grades', WsGradeSchema);
module.exports = WsGradeModel;