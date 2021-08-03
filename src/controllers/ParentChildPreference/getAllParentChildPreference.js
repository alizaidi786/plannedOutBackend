const responseConstant = require("../../constants/response.constants")
const db = require("../../helpers/db/index")
const response = require("../../helpers/response.maker")

module.exports.get = async () => {
    var Connection = await db.connectToDatabase();
    var ParentChildPreferenceModel = Connection.model('parent_child_preferences')

    return await ParentChildPreferenceModel.find({isDeleted: false})
    .populate({path: "parentId"})
    .populate({path: "childId"})
    .populate({path: "preferenceId"})
    .populate({path: "subCategoryId"})
    .then(
        async (data) => {
            return await response.success(responseConstant.PARENT_CHILD_PEREFERENCES.GET_ALL_PARENT_CHILD_PREFERENCE_SUCCESS, data)
        }
    ).catch(async (e) => {
        return await response.error(responseConstant.PARENT_CHILD_PEREFERENCES.GET_ALL_PARENT_CHILD_PREFERENCE_ERROR, { message: e })
    })
}