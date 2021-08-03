const responseConstant = require("../../constants/response.constants")
const db = require("../../helpers/db/index")
const response = require("../../helpers/response.maker")

module.exports.delete = async (id) => {
    var Connection = await db.connectToDatabase()
    var WorksheetModel = Connection.model('ws_images')

    let worksheetData = {
        isDeleted: true
    }

    return await WorksheetModel.findByIdAndUpdate(id, worksheetData)
        .then(async (data) => {
            return await response.success(responseConstant.WORKSHEET.DELETE_WORKSHEET_SUCCESS, data)
        }).catch(async (e) => {
            return await response.error(responseConstant.WORKSHEET.DELETE_WORKSHEET_ERROR, { message: e })
        })

}