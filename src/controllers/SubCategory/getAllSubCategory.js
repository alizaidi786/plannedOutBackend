const responseConstant = require("../../constants/response.constants")
const db = require("../../helpers/db/index")
const response = require("../../helpers/response.maker")

module.exports.get = async () => {
    var Connection = await db.connectToDatabase();
    var CategoryModel = Connection.model('sub_categories')

    return await CategoryModel.find({isDeleted: false})
    .populate({path: "categoryId"})
    .then(
        async (data) => {
            return await response.success(responseConstant.SUB_CATEGORY.GET_ALL_SUB_CATEGORY_SUCCESS, data)
        }
    ).catch(async (e) => {
        return await response.error(responseConstant.SUB_CATEGORY.GET_ALL_SUB_CATEGORY_ERROR, { message: e })
    })
}