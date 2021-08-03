const responseConstant = require("../../constants/response.constants")
const db = require("../../helpers/db/index")
const response = require("../../helpers/response.maker")

module.exports.create = async (data) => {
    var Connection = await db.connectToDatabase()

    var GradeModel = Connection.model('ws_grades')


    var {
        name,
        remarks,
        fromAge,
        toAge
    } = data

    let gradeData = {
        name,
        remarks,
        fromAge,
        toAge
    }
    var ins = new GradeModel(gradeData)
    return await ins.save().then(async () => {
        return await response.success(responseConstant.WS_GRADE.CREATE_WS_GRADE_SUCCESS, titleData)
    }).catch(async (e) => {
        return await response.error(responseConstant.WS_GRADE.CREATE_WS_GRADE_ERROR, { message: e })
    })
}