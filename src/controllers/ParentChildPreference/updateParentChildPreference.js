const responseConstant = require("../../constants/response.constants")
const db = require("../../helpers/db/index")
const response = require("../../helpers/response.maker")

module.exports.update = async (data) => {
    var Connection = await db.connectToDatabase()
    var ParentChildPreferenceModel = Connection.model('parent_child_preferences')

    var body = data

    let data = {
        ...body
    }

    return await ParentChildPreferenceModel.findByIdAndUpdate(body.id, data)
        .then(async (data) => {
            return await response.success(responseConstant.PARENT_CHILD_PEREFERENCES.UPDATE_PARENT_CHILD_PREFERENCE_SUCCESS, data)
        }).catch(async (e) => {
            return await response.error(responseConstant.PARENT_CHILD_PEREFERENCES.UPDATE_PARENT_CHILD_PREFERENCE_ERROR, { message: e })
        })

}