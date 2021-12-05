const responseConstant = require("../../constants/response.constants");
const db = require("../../helpers/db/index");
const response = require("../../helpers/response.maker");
const users = require("../../model/user.model");

module.exports.getOne = async (id) => {
  var Connection = await db.connectToDatabase();
  var UserModel = Connection.model("users");

  return await UserModel.findById(id)
    .then(async (data) => {
      return await response.success(
        responseConstant.USER.GET_ONE_USER_SUCCESS,
        data
      );
    })
    .catch(async (e) => {
      return await response.error(
        responseConstant.USER.GET_ONE_USER_ERROR,
        { message: e }
      );
    });
};
