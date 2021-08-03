const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SubCategorySchema = new Schema({
    name: Schema.Types.String,
    about: Schema.Types.String,
    isActive: Schema.Types.Boolean,
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: "preference_categories"
    },
    isDeleted: {
        type: Schema.Types.Boolean,
        default: false
    },
}, {
    timestamps: true
})
let SubCategoryModel = mongoose.model('sub_categories', SubCategorySchema);
module.exports = SubCategoryModel;