const responseConstant = require("../../constants/response.constants")
const db = require("../../helpers/db/index")
const response = require("../../helpers/response.maker")

module.exports.update = async (data) => {
    var Connection = await db.connectToDatabase()
    var CategoryModel = Connection.model('sub_categories')

    var body = data

    let categoryData = {
        ...body
    }

    return await CategoryModel.findByIdAndUpdate(body.id, categoryData)
        .then(async (data) => {
            return await response.success(responseConstant.SUB_CATEGORY.UPDATE_SUB_CATEGORY_SUCCESS, data)
        }).catch(async (e) => {
            return await response.error(responseConstant.SUB_CATEGORY.UPDATE_SUB_CATEGORY_ERROR, { message: e })
        })

}