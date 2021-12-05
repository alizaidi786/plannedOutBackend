const responseConstant = require("../../constants/response.constants");
const db = require("../../helpers/db/index");
const response = require("../../helpers/response.maker");

module.exports.create = async (data) => {
  var Connection = await db.connectToDatabase();

  var MessageModel = Connection.model("messages");
  var { conversationId, sender, text } = data;

  let MessageData = {
    conversationId,
    sender,
    text,
  };  

  var ins = new MessageModel(MessageData);
  return await ins
    .save()
    .then(async () => {
      return await response.success(
        responseConstant.MESSAGE.CREATE_MESSAGE_SUCCESS,
        MessageData
      );
    })
    .catch(async (e) => {
      return await response.error(
        responseConstant.MESSAGE.CREATE_MESSAGE_ERROR,
        { message: e }
      );
    });
};
