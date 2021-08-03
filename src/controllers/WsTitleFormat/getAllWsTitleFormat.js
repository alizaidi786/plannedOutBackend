const responseConstant = require("../../constants/response.constants")
const db = require("../../helpers/db/index")
const response = require("../../helpers/response.maker")

module.exports.get = async () => {
    var Connection = await db.connectToDatabase();
    var TitleModel = Connection.model('ws_title_formats')

    return await TitleModel.find({isDeleted: false})
    .populate({path: "titleId"})
    .then(
        async (data) => {
            return await response.success(responseConstant.WS_TITLE_FORMAT.GET_ALL_WS_TITLE_FORMAT_SUCCESS, data)
        }
    ).catch(async (e) => {
        return await response.error(responseConstant.WS_TITLE_FORMAT.GET_ALL_WS_TITLE_FORMAT_ERROR, { message: e })
    })
}