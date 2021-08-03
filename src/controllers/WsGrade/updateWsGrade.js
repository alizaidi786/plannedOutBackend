const responseConstant = require("../../constants/response.constants")
const db = require("../../helpers/db/index")
const response = require("../../helpers/response.maker")

module.exports.update = async (data) => {
    var Connection = await db.connectToDatabase()
    var GradeModel = Connection.model('ws_grades')

    var body = data

    let gradeData = {
        ...body
    }

    return await GradeModel.findByIdAndUpdate(body.id, gradeData)
        .then(async (data) => {
            return await response.success(responseConstant.WS_GRADE.UPDATE_WS_GRADE_SUCCESS, data)
        }).catch(async (e) => {
            return await response.error(responseConstant.WS_GRADE.UPDATE_WS_GRADE_ERROR, { message: e })
        })

}