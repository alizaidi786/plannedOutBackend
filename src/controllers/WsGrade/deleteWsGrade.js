const responseConstant = require("../../constants/response.constants")
const db = require("../../helpers/db/index")
const response = require("../../helpers/response.maker")

module.exports.delete = async (id) => {
    var Connection = await db.connectToDatabase()
    var GradeModel = Connection.model('ws_grades')

    let gradeData = {
        isDeleted: true
    }

    return await GradeModel.findByIdAndUpdate(id, gradeData)
        .then(async (data) => {
            return await response.success(responseConstant.WS_GRADE.DELETE_WS_GRADE_SUCCESS, data)
        }).catch(async (e) => {
            return await response.error(responseConstant.WS_GRADE.GET_ALL_WS_GRADE_ERROR, { message: e })
        })

}