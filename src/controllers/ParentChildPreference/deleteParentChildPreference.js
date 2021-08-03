const responseConstant = require("../../constants/response.constants")
const db = require("../../helpers/db/index")
const response = require("../../helpers/response.maker")

module.exports.delete = async (id) => {
    var Connection = await db.connectToDatabase()
    var ParentChildPreferenceModel = Connection.model('parent_child_preferences')

    let data = {
        isDeleted: true
    }

    return await ParentChildPreferenceModel.findByIdAndUpdate(id, data)
        .then(async (data) => {
            return await response.success(responseConstant.PARENT_CHILD_PEREFERENCES.DELETE_PARENT_CHILD_PREFERENCE_SUCCESS, data)
        }).catch(async (e) => {
            return await response.error(responseConstant.PARENT_CHILD_PEREFERENCES.DELETE_PARENT_CHILD_PREFERENCE_ERROR, { message: e })
        })

}