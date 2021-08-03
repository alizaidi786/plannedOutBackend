const responseConstant = require("../../constants/response.constants")
const db = require("../../helpers/db/index")
const response = require("../../helpers/response.maker")

module.exports.delete = async (id) => {
    var Connection = await db.connectToDatabase()
    var TitleModel = Connection.model('ws_title_mis')

    let titleData = {
        isDeleted: true
    }

    return await TitleModel.findByIdAndUpdate(id, titleData)
        .then(async (data) => {
            return await response.success(responseConstant.WS_TITLE_FORMAT.DELETE_WS_TITLE_FORMAT_SUCCESS, data)
        }).catch(async (e) => {
            return await response.error(responseConstant.WS_TITLE_FORMAT.DELETE_WS_TITLE_FORMAT_ERROR, { message: e })
        })

}