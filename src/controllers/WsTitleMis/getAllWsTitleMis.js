const responseConstant = require("../../constants/response.constants")
const db = require("../../helpers/db/index")
const response = require("../../helpers/response.maker")
const mongoose = require('mongoose')

module.exports.get = async (header) => {
    var Connection = await db.connectToDatabase();
    var TitleModel = Connection.model('ws_title_mis')
    
    var UserModel = Connection.model('credentials')
    
    var user = await UserModel.find({loginToken: header["auth-token"]})
    user = user[0]
    var query = user.userRole != "superAdmin" ? {isDeleted: false, $or: [{contentBy: mongoose.Types.ObjectId(user.userId)}, {designBy: mongoose.Types.ObjectId(user.userId)}]} : {isDeleted: false}
    return await TitleModel.find(query)
    .populate({path: "titleId"})
    .populate({path: "formatId"})
    .populate({path: "designBy", select: {firstName: 1, lastName: 1}})
    .populate({path: "contentBy", select: {firstName: 1, lastName: 1}})
    .then(
        async (data) => {
            return await response.success(responseConstant.WS_TITLE_FORMAT.GET_ALL_WS_TITLE_FORMAT_SUCCESS, data)
        }
    ).catch(async (e) => {
        return await response.error(responseConstant.WS_TITLE_FORMAT.GET_ALL_WS_TITLE_FORMAT_ERROR, { message: e })
    })
}