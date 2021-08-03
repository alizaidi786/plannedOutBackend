const db = require('../../helpers/db/index');
const response = require('../../helpers/response.maker');
const operationConstants = require('../../constants/operation.constants');
const Auth = require('../../helpers/auth.user');
const Message = require('../../constants/status.messages.constants');
const mongoose = require("mongoose");
const { WS_TITLE_FORMAT } = require('../../constants/response.constants');
// API function for getting all content

module.exports.get = async (data) => {
    
    const Connection = await db.connectToDatabase();

    // const token = event.headers['auth-token'];
    // console.log(event.body)
    const body = data;
    // console.log(body)
    const ContentModel = Connection.model('contents');
    const CategoryModel = Connection.model('categories');

    let objectToFind = { isDeleted: false };
    if (body != null && body.contentCategory != undefined && body.contentCategory != null) {
        objectToFind["contentCategory"] = { "$in": body.contentCategory.map(cat => mongoose.Types.ObjectId(cat)) }
    }
    else {
        var categories = await CategoryModel.distinct("_id", { isDeleted: false, name: { $ne: "Jokes" }, $or: [{ type: "shortDescriptionWithStackCarousel" }, { type: "questionAndAnswer" }] })
        console.log(categories)
        objectToFind["contentCategory"] = { "$in": categories }
    }
    var total = await ContentModel.countDocuments(objectToFind)
    return await ContentModel.find(objectToFind, { title: 1, shortDescription: 1, question: 1, answer: 1 })
        .skip((body.page - 1) * body.limit)
        .limit(body.limit)
        .populate({
            path: 'contentCategory',
            match: { isDeleted: false },
            select: "_id name"
        })
        .then(async (data) => {
            data = { total: total, data }
            return await response.success("GET ALL CONTENT SUCCESS", data)
        }).catch(async (e) => {
            return await response.error("GET ALL CONTENT ERROR",  { message: e })
        });

};