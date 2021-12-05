const responseConstant = require("../../constants/response.constants");
const db = require("../../helpers/db/index");
const response = require("../../helpers/response.maker");
const users = require("../../model/user.model");

module.exports.get = async (email, password) => {
  var Connection = await db.connectToDatabase();
  var UserModel = Connection.model("users");

  return await UserModel.find({ email: email, password: password })
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
