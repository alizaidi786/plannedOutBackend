const responseConstant = require("../../constants/response.constants")
const db = require("../../helpers/db/index")
const response = require("../../helpers/response.maker")

module.exports.update = async (data) => {
    var Connection = await db.connectToDatabase()
    var TitleModel = Connection.model('ws_title_formats')

    var body = data

    let titleData = {
        ...body
    }

    return await TitleModel.findByIdAndUpdate(body.id, titleData)
        .then(async (data) => {
            return await response.success(responseConstant.WS_TITLE_FORMAT.UPDATE_WS_TITLE_FORMAT_SUCCESS, data)
        }).catch(async (e) => {
            return await response.error(responseConstant.WS_TITLE_FORMAT.UPDATE_WS_TITLE_FORMAT_ERROR, { message: e })
        })

}