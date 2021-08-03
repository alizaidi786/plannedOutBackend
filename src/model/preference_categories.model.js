const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: Schema.Types.String,
    description: Schema.Types.String,
    fromAge: Schema.Types.Number,
    toAge: Schema.Types.Number,
    isActive: Schema.Types.Boolean,
    isDeleted: {
        type: Schema.Types.Boolean,
        default: false
    },
}, {
    timestamps: true
})
let CategoryModel = mongoose.model('preference_categories', CategorySchema);
module.exports = CategoryModel;