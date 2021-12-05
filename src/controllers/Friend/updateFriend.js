const responseConstant = require("../../constants/response.constants");
const db = require("../../helpers/db/index");
const response = require("../../helpers/response.maker");

module.exports.update = async (data) => {
    var Connection = await db.connectToDatabase();
    var FriendModel = Connection.model("friends");
  
    var body = data;
  
    let FriendData = {
      ...body,
    };
  
    return await FriendModel.findByIdAndUpdate(body.id, FriendData, {new: true})
      .then(async (data) => {
        return await response.success(
          responseConstant.FRIEND.UPDATE_FRIEND_SUCCESS,
          data
        );
      })
      .catch(async (e) => {
        return await response.error(
          responseConstant.FRIEND.UPDATE_FRIEND_ERROR,
          { message: e }
        );
      });
  };
  