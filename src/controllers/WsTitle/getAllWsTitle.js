const responseConstant = require("../../constants/response.constants")
const db = require("../../helpers/db/index")
const response = require("../../helpers/response.maker")

module.exports.get = async () => {
    var Connection = await db.connectToDatabase();
    var TitleModel = Connection.model('ws_titles')

    return await TitleModel.find({isDeleted: false})
    .populate({path: "preferencesCategoryId"})
    .populate({path: "subCategoryId"})
    .populate({path: "grades"})
    .then(
        async (data) => {
            return await response.success(responseConstant.WS_TITLE.GET_ALL_WS_TITLE_SUCCESS, data)
        }
    ).catch(async (e) => {
        return await response.error(responseConstant.WS_TITLE.GET_ALL_WS_TITLE_ERROR, { message: e })
    })
}