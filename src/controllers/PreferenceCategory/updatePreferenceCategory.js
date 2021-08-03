const responseConstant = require("../../constants/response.constants")
const db = require("../../helpers/db/index")
const response = require("../../helpers/response.maker")

module.exports.update = async (data) => {
    var Connection = await db.connectToDatabase()
    var CategoryModel = Connection.model('preference_categories')

    var body = data

    let categoryData = {
        ...body
    }

    return await CategoryModel.findByIdAndUpdate(body.id, categoryData)
        .then(async (data) => {
            return await response.success(responseConstant.PREFERENCE_CATEGORY.UPDATE_PREFERENCE_CATEGORY_SUCCESS, data)
        }).catch(async (e) => {
            return await response.error(responseConstant.PREFERENCE_CATEGORY.UPDATE_PREFERENCE_CATEGORY_ERROR, { message: e })
        })

}