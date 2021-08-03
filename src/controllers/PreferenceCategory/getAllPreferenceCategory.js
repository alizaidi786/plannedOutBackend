const responseConstant = require("../../constants/response.constants");
const db = require("../../helpers/db/index");
const response = require("../../helpers/response.maker");

module.exports.get = async () => {
  var Connection = await db.connectToDatabase();
  var CategoryModel = Connection.model("preference_categories");

  return await CategoryModel.find({ isDeleted: false })
    .then(async (data) => {
      return await response.success(
        responseConstant.PREFERENCE_CATEGORY
          .GET_ALL_PREFERENCE_CATEGORY_SUCCESS,
        data
      );
    })
    .catch(async (e) => {
      return await response.error(
        responseConstant.PREFERENCE_CATEGORY.GET_ALL_PREFERENCE_CATEGORY_ERROR,
        { message: e }
      );
    });
};
