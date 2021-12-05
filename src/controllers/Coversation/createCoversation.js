const responseConstant = require("../../constants/response.constants");
const db = require("../../helpers/db/index");
const response = require("../../helpers/response.maker");
// const conversations = require("../../model/conversation.model");

module.exports.create = async (data) => {
  var Connection = await db.connectToDatabase();

  var ConversationModel = Connection.model("conversations");
  var { members } = data;

  let ConversationData = {
    members
  };

  var ins = new ConversationModel(ConversationData)
    return await ins.save().then(async (data) => {
        return await response.success(responseConstant.CONVERSATION.CREATE_CONVERSATION_SUCCESS,data )
    }).catch(async (e) => {
        return await response.error(responseConstant.CONVERSATION.CREATE_CONVERSATION_ERROR, { message: e })
    })

};
