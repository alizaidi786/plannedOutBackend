const responseConstant = require("../../constants/response.constants");
const db = require("../../helpers/db/index");
const response = require("../../helpers/response.maker");

module.exports.get = async (id) => {
  var Connection = await db.connectToDatabase();
  var ConversationModel = Connection.model("conversations");

  return await ConversationModel.find({members:{$in:[id]}})
    .then(async (data) => {
      return await response.success(
        responseConstant.CONVERSATION.GET_ONE_CONVERSATION_SUCCESS,
        data
      );
    })
    .catch(async (e) => {
      return await response.error(
        responseConstant.CONVERSATION.GET_ONE_CONVERSATION_ERROR,
        { message: e }
      );
    });
};
