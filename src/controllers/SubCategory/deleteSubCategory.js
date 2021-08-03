const responseConstant = require("../../constants/response.constants")
const db = require("../../helpers/db/index")
const response = require("../../helpers/response.maker")

module.exports.delete = async (id) => {
    var Connection = await db.connectToDatabase()
    var CategoryModel = Connection.model('sub_categories')

    let categoryData = {
        isDeleted: true
    }

    return await CategoryModel.findByIdAndUpdate(id, categoryData)
        .then(async (data) => {
            return await response.success(responseConstant.SUB_CATEGORY.DELETE_SUB_CATEGORY_SUCCESS, data)
        }).catch(async (e) => {
            return await response.error(responseConstant.SUB_CATEGORY.DELETE_SUB_CATEGORY_ERROR, { message: e })
        })

}