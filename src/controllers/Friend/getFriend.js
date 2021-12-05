const responseConstant = require("../../constants/response.constants");
const db = require("../../helpers/db/index");
const response = require("../../helpers/response.maker");

module.exports.get = async (id) => {
  var Connection = await db.connectToDatabase();
  var FriendModel = Connection.model("friends");

  return await FriendModel.findById( id )
    .then(async (data) => {
      return await response.success(
        responseConstant.FRIEND.GET_ONE_FRIEND_SUCCESS,
        data
      );
    })
    .catch(async (e) => {
      return await response.error(
        responseConstant.FRIEND.GET_ONE_FRIEND_ERROR,
        { message: e }
      );
    });
};
