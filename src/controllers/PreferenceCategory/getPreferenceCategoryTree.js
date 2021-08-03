const responseConstant = require("../../constants/response.constants");
const db = require("../../helpers/db/index");
const response = require("../../helpers/response.maker");

module.exports.get = async () => {
  var Connection = await db.connectToDatabase();
  var CategoryModel = Connection.model("preference_categories");

  return await CategoryModel.aggregate([
    { $match: { isDeleted: false, isActive: true } },
    {
      $lookup: {
        localField: "_id",
        foreignField: "categoryId",
        from: "sub_categories",
        as: "preferences",
      },
    },
    { $project: { _id: 1, name: 1, description: 1, preferences: 1 } },
  ])
    .then(async (data) => {
      return await response.success(
        responseConstant.SUB_CATEGORY.GET_ALL_SUB_CATEGORY_SUCCESS,
        data
      );
    })
    .catch(async (e) => {
      return await response.error(
        responseConstant.SUB_CATEGORY.GET_ALL_SUB_CATEGORY_ERROR,
        { message: e }
      );
    });
};
