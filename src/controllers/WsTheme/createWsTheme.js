const responseConstant = require("../../constants/response.constants")
const db = require("../../helpers/db/index")
const response = require("../../helpers/response.maker")

module.exports.create = async (data) => {
    var Connection = await db.connectToDatabase()

    var ThemeModel = Connection.model('ws_themes')
    var {
        name,
        date,
        remarks
    } = data
    let themeData = {
        name,
        date,
        remarks
    }
    var ins = new ThemeModel(themeData)
    return await ins.save().then(async () => {
        return await response.success(responseConstant.WS_THEME.CREATE_WS_THEME_SUCCESS, themeData)
    }).catch(async (e) => {
        return await response.error(responseConstant.WS_THEME.CREATE_WS_THEME_ERROR, { message: e })
    })
}