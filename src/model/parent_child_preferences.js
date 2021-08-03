const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ParentChilPreferenceSchema = new Schema({
    parentId: {
        type: Schema.Types.ObjectId,
        ref: "parents"
    },
    childId: {
        type: Schema.Types.ObjectId,
        ref: "childrens"
    },
    preferenceId: {
        type: Schema.Types.ObjectId,
        ref: "preference_categories"
    },
    subCategoryId: {
        type: Schema.Types.ObjectId,
        ref: "sub_categories"
    },
    subscriptionDate: Schema.Types.Date,
    isDeleted: {
        type: Schema.Types.Boolean,
        default: false
    },
}, {
    timestamps: true
})
let SubCategoryModel = mongoose.model('parent_child_preferences', ParentChilPreferenceSchema);
module.exports = SubCategoryModel;