const responseConstant = require("../../constants/response.constants")
const db = require("../../helpers/db/index")
const response = require("../../helpers/response.maker")

module.exports.get = async () => {
    var Connection = await db.connectToDatabase();
    var ThemeModel = Connection.model('ws_themes')

    return await ThemeModel.find({isDeleted: false}).then(
        async (data) => {
            return await response.success(responseConstant.WS_THEME.GET_ALL_WS_THEME_SUCCESS, data)
        }
    ).catch(async (e) => {
        return await response.error(responseConstant.WS_THEME.GET_ALL_WS_THEME_ERROR, { message: e })
    })
}