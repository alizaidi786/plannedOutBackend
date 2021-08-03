const responseConstant = require("../../constants/response.constants");
const db = require("../../helpers/db/index");
const response = require("../../helpers/response.maker");

module.exports.delete = async (id) => {
  var Connection = await db.connectToDatabase();
  var ChoosePreferencesSubCategoryModel = Connection.model(
    "choose_preferences_sub_categories"
  );
  let data = {
    isDeleted: true,
  };

  return await ChoosePreferencesSubCategoryModel.findByIdAndUpdate(id, data)
    .then(async (data) => {
      return await response.success(
        responseConstant.CHOOSE_PREFERENCE_SUB_CATEGORY
          .DELETE_CHOOSE_PREFERENCE_SUB_CATEGORY_SUCCESS,
        data
      );
    })
    .catch(async (e) => {
      return await response.error(
        responseConstant.CHOOSE_PREFERENCE_SUB_CATEGORY
          .DELETE_CHOOSE_PREFERENCE_SUB_CATEGORY_ERROR,
        { message: e }
      );
    });
};
