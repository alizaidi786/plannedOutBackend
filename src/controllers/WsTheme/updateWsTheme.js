const responseConstant = require("../../constants/response.constants")
const db = require("../../helpers/db/index")
const response = require("../../helpers/response.maker")

module.exports.update = async (data) => {
    var Connection = await db.connectToDatabase()
    var ThemeModel = Connection.model('ws_themes')

    var body = data

    let themeData = {
        ...body
    }

    return await ThemeModel.findByIdAndUpdate(body.id, themeData)
        .then(async (data) => {
            return await response.success(responseConstant.WS_THEME.UPDATE_WS_THEME_SUCCESS, data)
        }).catch(async (e) => {
            return await response.error(responseConstant.WS_THEME.UPDATE_WS_THEME_ERROR, { message: e })
        })

}