const responseConstant = require("../../constants/response.constants")
const db = require("../../helpers/db/index")
const response = require("../../helpers/response.maker")
const mongoose = require("mongoose")

module.exports.create = async (data) => {
    var Connection = await db.connectToDatabase()

    var WorksheetModel = Connection.model('ws_images')
    var TitleModel = Connection.model('ws_title_mis')

    var {
        themeId,
        titleId,
        formatId,
        focusKeyword,
        bodyImageUrl,
        approxTime,
        headerIns,
        preferencesCategoryId,
        subCategoryId,
        learning,
        scheduleDate,
        guideline,
        isSchedule,
        metaTitle,
        printableTitle,
        metaDescription,
        answerText,
        answerImageUrl,
        fromAge,
        toAge,
        language,
        hashTag,
        isOnWeb,
        beeRating,
        pinterestLink,
        adminComment,
        isActive,
        forBoy,
        forGirl,
        worksheetUrl
    } = data

    let worksheetData = {
        themeId,
        titleId,
        formatId,
        focusKeyword,
        bodyImageUrl,
        printableTitle,
        headerIns,
        approxTime,
        preferencesCategoryId,
        subCategoryId,
        learning,
        scheduleDate,
        guideline,
        isSchedule,
        metaTitle,
        metaDescription,
        answerText,
        answerImageUrl,
        fromAge,
        toAge,
        country: [],
        language,
        hashTag,
        isOnWeb,
        beeRating,
        pinterestLink,
        adminComment,
        isActive,
        forBoy,
        forGirl,
        worksheetUrl
    }
    var ins = new WorksheetModel(worksheetData)
    return await ins.save().then(async () => {
        var mis = await TitleModel.find({ formatId: mongoose.Types.ObjectId(formatId) }, { availableWs: 1 })
        if (mis.length > 0) { 
            var count = mis[0].availableWs
            count = count + 1
            var dd = await TitleModel.updateMany({ formatId: mongoose.Types.ObjectId(formatId) }, { availableWs : count }) 
        }
        return await response.success(responseConstant.WORKSHEET.CREATE_WORKSHEET_SUCCESS, worksheetData)
    }).catch(async (e) => {
        console.log(e)
        return await response.error(responseConstant.WORKSHEET.CREATE_WORKSHEET_ERROR, { message: e })
    })
}