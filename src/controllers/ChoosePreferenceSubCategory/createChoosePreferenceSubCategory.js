const responseConstant = require("../../constants/response.constants");
const db = require("../../helpers/db/index");
const response = require("../../helpers/response.maker");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports.create = async (data) => {
  var Connection = await db.connectToDatabase();

  var ChoosePreferencesSubCategoryModel = Connection.model(
    "choose_preferences_sub_categories"
  );

  var { childrenId, parentId, preferences } = data;

  // console.log(data);

  let ChoosePreferencesSubCategorydData = {
    childrenId,
    parentId,
    preferences,
  };

  var cpscm = new ChoosePreferencesSubCategoryModel(
    ChoosePreferencesSubCategorydData
  );
  // console.log(childrenId);
  var mis = await ChoosePreferencesSubCategoryModel.find({
    childrenId: mongoose.Types.ObjectId(childrenId),
  });

  // console.log(mis);

  if (mis.length === 1) {
    var pref = mis[0].preferences;
    let newPref = [];
    let found = false;
    pref.forEach((p) => {
      if (p.categoryId.toString() === preferences[0].categoryId) {
        found = true;
        if (preferences[0].sub_categories.length > 0) {
          newPref.push(preferences[0]);
        }
      } else {
        newPref.push(p);
      }
    });
    if (!found) {
      newPref.push(preferences[0]);
    }

    return await ChoosePreferencesSubCategoryModel.updateOne(
      {
        childrenId: mongoose.Types.ObjectId(childrenId),
      },
      {
        preferences: newPref,
      }
    )
      .then(async (data) => {
        return await response.success(
          responseConstant.CHOOSE_PREFERENCE_SUB_CATEGORY
            .UPDATE_CHOOSE_PREFERENCE_SUB_CATEGORY_SUCCESS,
          data
        );
      })
      .catch(async (e) => {
        return await response.error(
          responseConstant.CHOOSE_PREFERENCE_SUB_CATEGORY
            .UPDATE_CHOOSE_PREFERENCE_SUB_CATEGORY_ERROR,
          { message: e }
        );
      });
  } else {
    return await cpscm
      .save()
      .then(async () => {
        return await response.success(
          responseConstant.CHOOSE_PREFERENCE_SUB_CATEGORY
            .CREATE_CHOOSE_PREFERENCE_SUB_CATEGORY_SUCCESS,
          ChoosePreferencesSubCategorydData
        );
      })
      .catch(async (e) => {
        console.log(e);
        return await response.error(
          responseConstant.CHOOSE_PREFERENCE_SUB_CATEGORY
            .CREATE_CHOOSE_PREFERENCE_SUB_CATEGORY_ERROR,
          { message: e }
        );
      });
  }
};
