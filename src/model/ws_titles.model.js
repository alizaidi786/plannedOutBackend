const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WsCategorySchema = new Schema({
    name: Schema.Types.String,
    priority: Schema.Types.String,
    preferencesCategoryId: [{
        type: Schema.Types.ObjectId,
        ref: "preference_categories"
    }],
    subCategoryId: [{
        type: Schema.Types.ObjectId,
        ref: "sub_categories"
    }],
    learningSkills: [Schema.Types.String],
    guideline: Schema.Types.String,
    isActive: Schema.Types.Boolean,
    remarks: Schema.Types.String,
    isDeleted: {
        type: Schema.Types.Boolean,
        default: false
    },
}, {
    timestamps: true
})
let WsCategoryModel = mongoose.model('ws_titles', WsCategorySchema);
module.exports = WsCategoryModel;