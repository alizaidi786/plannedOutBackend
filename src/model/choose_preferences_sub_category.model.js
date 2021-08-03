const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChoosePreferencesSubCategorySchema = new Schema(
  {
    childrenId: { type: Schema.Types.ObjectId, ref: "childrens" },
    parentId: { type: Schema.Types.ObjectId, ref: "parents" },

    preferences: [
      {
        categoryId: {
          type: Schema.Types.ObjectId,
          ref: "preference_categories",
        },
        sub_categories: [
          {
            type: Schema.Types.ObjectId,
            ref: "sub_categories",
          },
        ],
      },
    ],
    isDeleted: {
      type: Schema.Types.Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

let ChoosePreferencesSubCategoryModel = mongoose.model(
  "choose_preferences_sub_categories",
  ChoosePreferencesSubCategorySchema
);

module.exports = ChoosePreferencesSubCategoryModel;
