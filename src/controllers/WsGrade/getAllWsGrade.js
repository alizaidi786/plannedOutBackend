const responseConstant = require("../../constants/response.constants")
const db = require("../../helpers/db/index")
const response = require("../../helpers/response.maker")

module.exports.get = async () => {
    var Connection = await db.connectToDatabase();
    var GradeModel = Connection.model('ws_grades')

    return await GradeModel.find({isDeleted: false}).then(
        async (data) => {
            return await response.success(responseConstant.WS_GRADE.GET_ALL_WS_GRADE_SUCCESS, data)
        }
    ).catch(async (e) => {
        return await response.error(responseConstant.WS_GRADE.GET_ALL_WS_GRADE_ERROR, { message: e })
    })
}