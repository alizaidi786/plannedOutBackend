const responseConstant = require("../../constants/response.constants")
const db = require("../../helpers/db/index")
const response = require("../../helpers/response.maker")

module.exports.update = async (data) => {
    var Connection = await db.connectToDatabase()
    var TitleModel = Connection.model('ws_titles')

    var body = data

    let titleData = {
        ...body
    }

    return await TitleModel.findByIdAndUpdate(body.id, titleData)
        .then(async (data) => {
            return await response.success(responseConstant.WS_TITLE.UPDATE_WS_TITLE_SUCCESS, data)
        }).catch(async (e) => {
            return await response.error(responseConstant.WS_TITLE.UPDATE_WS_TITLE_ERROR, { message: e })
        })

}