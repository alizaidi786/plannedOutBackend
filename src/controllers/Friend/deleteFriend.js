const responseConstant = require("../../constants/response.constants");
const db = require("../../helpers/db/index");
const response = require("../../helpers/response.maker");

module.exports.delete = async (id) => {
  var Connection = await db.connectToDatabase();
  var FriendModel = Connection.model("friends");
  let data = {
    isDeleted: true,
  };

  return await FriendModel.findByIdAndUpdate(id, data, {new: true})
    .then(async (data) => {
      return await response.success(
        responseConstant.FRIEND.DELETE_FRIEND_SUCCESS,
        data
      );
    })
    .catch(async (e) => {
      return await response.error(
        responseConstant.FRIEND.DELETE_FRIEND_ERROR,
        { message: e }
      );
    });
};
