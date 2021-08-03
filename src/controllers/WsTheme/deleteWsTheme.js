const responseConstant = require("../../constants/response.constants")
const db = require("../../helpers/db/index")
const response = require("../../helpers/response.maker")

module.exports.delete = async (id) => {
    var Connection = await db.connectToDatabase()
    var ThemeModel = Connection.model('ws_themes')

    let themeData = {
        isDeleted: true
    }

    return await ThemeModel.findByIdAndUpdate(id, themeData)
        .then(async (data) => {
            return await response.success(responseConstant.WS_THEME.DELETE_WS_THEME_SUCCESS, data)
        }).catch(async (e) => {
            return await response.error(responseConstant.WS_THEME.DELETE_WS_THEME_ERROR, { message: e })
        })

}