const responseConstant = require("../../constants/response.constants")
const db = require("../../helpers/db/index")
const response = require("../../helpers/response.maker")

module.exports.create = async (data) => {
    var Connection = await db.connectToDatabase()

    var CategoryModel = Connection.model('sub_categories')

    var {
        name,
        about,
        categoryId,
        isActive
    } = data
    let categoryData = {
        name,
        about,
        categoryId,
        isActive
    }
    var ins = new CategoryModel(categoryData)
    return await ins.save().then(async () => {
        return await response.success(responseConstant.SUB_CATEGORY.CREATE_SUB_CATEGORY_SUCCESS, categoryData)
    }).catch(async (e) => {
        return await response.error(responseConstant.SUB_CATEGORY.CREATE_SUB_CATEGORY_ERROR, { message: e })
    })
}