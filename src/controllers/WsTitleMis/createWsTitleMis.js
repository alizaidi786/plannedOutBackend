const responseConstant = require("../../constants/response.constants")
const db = require("../../helpers/db/index")
const response = require("../../helpers/response.maker")

module.exports.create = async (data) => {
    var Connection = await db.connectToDatabase()

    var TitleModel = Connection.model('ws_title_mis')


    var {
        titleId,
        formatId,
        target,
        targetDate,
        refWsLink,
        bodyImageFolder,
        answerType,
        contentFolder,
        designBy,
        contentBy,
        remarks
    } = data

    let titleData = {
        titleId,
        formatId,
        target,
        targetDate,
        refWsLink,
        answerType,
        bodyImageFolder,
        contentFolder,
        designBy,
        contentBy,
        remarks
    }
    var ins = new TitleModel(titleData)
    return await ins.save().then(async () => {
        return await response.success(responseConstant.WS_TITLE_FORMAT.CREATE_WS_TITLE_FORMAT_SUCCESS, titleData)
    }).catch(async (e) => {
        return await response.error(responseConstant.WS_TITLE_FORMAT.CREATE_WS_TITLE_FORMAT_ERROR, { message: e })
    })
}