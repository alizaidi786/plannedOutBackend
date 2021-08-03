const responseConstant = require("../../constants/response.constants");
const db = require("../../helpers/db/index");
const response = require("../../helpers/response.maker");

module.exports.get = async (id) => {
  var Connection = await db.connectToDatabase();
  var ChoosePreferencesSubCategoryModel = Connection.model(
    "choose_preferences_sub_categories"
  );

  return await ChoosePreferencesSubCategoryModel.find({
    isDeleted: false,
    childrenId: id,
  })
    .populate({ path: "preferences.categoryId", select: { name: 1 } })
    .populate({ path: "preferences.sub_categories", select: { name: 1 } })
    .then(async (data) => {
      return await response.success(
        responseConstant.CHOOSE_PREFERENCE_SUB_CATEGORY
          .GET_ONE_CHOOSE_PREFERENCE_SUB_CATEGORY_SUCCESS,
        data
      );
    })
    .catch(async (e) => {
      console.log(e);
      return await response.error(
        responseConstant.CHOOSE_PREFERENCE_SUB_CATEGORY
          .GET_ONE_CHOOSE_PREFERENCE_SUB_CATEGORY_ERROR,
        { message: e }
      );
    });
};
