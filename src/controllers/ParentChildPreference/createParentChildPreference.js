const responseConstant = require("../../constants/response.constants")
const db = require("../../helpers/db/index")
const response = require("../../helpers/response.maker")

module.exports.create = async (data) => {
    var Connection = await db.connectToDatabase()

    var ParentChildPreferenceModel = Connection.model('parent_child_preferences')

    var {
        parentId,
        childId,
        preferenceId,
        subCategoryId,
        subscriptionDate
    } = data
    let parenteChildData = {
        parentId,
        childId,
        preferenceId,
        subCategoryId,
        subscriptionDate
    }
    var ins = new ParentChildPreferenceModel(parenteChildData)
    return await ins.save().then(async () => {
        return await response.success(responseConstant.PARENT_CHILD_PEREFERENCES.CREATE_PARENT_CHILD_PREFERENCE_SUCCESS, parenteChildData)
    }).catch(async (e) => {
        return await response.error(responseConstant.PARENT_CHILD_PEREFERENCES.CREATE_PARENT_CHILD_PREFERENCE_ERROR, { message: e })
    })
}