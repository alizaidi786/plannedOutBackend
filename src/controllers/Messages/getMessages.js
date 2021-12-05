const responseConstant = require("../../constants/response.constants");
const db = require("../../helpers/db/index");
const response = require("../../helpers/response.maker");

module.exports.get = async (id) => {
  var Connection = await db.connectToDatabase();
  var MessageModel = Connection.model("messages");

  return await MessageModel.find({ conversationId: id })
    .then(async (data) => {
      return await response.success(
        responseConstant.MESSAGE.GET_ONE_MESSAGE_SUCCESS,
        data
      );
    })
    .catch(async (e) => {
      return await response.error(
        responseConstant.MESSAGE.GET_ONE_MESSAGE_ERROR,
        { message: e }
      );
    });
};
