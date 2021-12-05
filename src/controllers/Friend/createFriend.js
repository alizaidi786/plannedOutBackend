const responseConstant = require("../../constants/response.constants");
const db = require("../../helpers/db/index");
const response = require("../../helpers/response.maker");

module.exports.create = async (data) => {
    var Connection = await db.connectToDatabase();
  
    var FriendModel = Connection.model("friends");
    var { userId, friendsId } = data;
  
    let FriendData = {
        userId,
        friendsId
    };
  
    var ins = new FriendModel(FriendData);
    return await ins
      .save()
      .then(async (data) => {
        return await response.success(
          responseConstant.FRIEND.CREATE_FRIEND_SUCCESS,
          data
        );
      })
      .catch(async (e) => {
        return await response.error(
        responseConstant.FRIEND.CREATE_FRIEND_ERROR, 
        { message: e,}
        );
      });
  };