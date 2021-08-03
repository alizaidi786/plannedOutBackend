const responseConstant = require("../../constants/response.constants")
const db = require("../../helpers/db/index")
const response = require("../../helpers/response.maker")

module.exports.update = async (data) => {
    var Connection = await db.connectToDatabase()
    var WorksheetModel = Connection.model('ws_images')

    var body = data

    let worksheetData = {
        ...body
    }

    return await WorksheetModel.findByIdAndUpdate(body.id, worksheetData)
        .then(async (data) => {
            return await response.success(responseConstant.WORKSHEET.UPDATE_WORKSHEET_SUCCESS, data)
        }).catch(async (e) => {
            return await response.error(responseConstant.WORKSHEET.UPDATE_WORKSHEET_ERROR, { message: e })
        })

}