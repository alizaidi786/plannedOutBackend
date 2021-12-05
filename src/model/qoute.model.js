const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QouteSchema = new Schema(
    {
        writer: Schema.Types.String,
        qoutes:  Schema.Types.Array,
        isDeleted: {
            type: Schema.Types.Boolean,
            default: false,
          }
    }, { timestamps: true }
);

let QouteModel = mongoose.model("qoutes", QouteSchema);
module.exports = QouteModel;