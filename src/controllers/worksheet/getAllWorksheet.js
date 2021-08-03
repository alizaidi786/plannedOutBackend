const responseConstant = require("../../constants/response.constants")
const db = require("../../helpers/db/index")
const response = require("../../helpers/response.maker")

module.exports.get = async () => {
    var Connection = await db.connectToDatabase();
    var WorksheetModel = Connection.model('ws_images')

    return await WorksheetModel.find({isDeleted: false})
    .populate({path: "themeId"})
    .populate({path: "titleId"})
    .populate({path: "formatId"})
    .populate({path: "preferencesCategoryId"})
    .populate({path: "subCategoryId"})
    .populate({path: "grades"})
    .populate({path: "contributors", select: {firstName: 1, lastName: 1}}).then(
        async (data) => {
            return await response.success(responseConstant.WORKSHEET.GET_ALL_WORKSHEET_SUCCESS, data)
        }
    ).catch(async (e) => {
        console.log(e)
        return await response.error(responseConstant.WORKSHEET.GET_ALL_WORKSHEET_ERROR, { message: e })
    })
}