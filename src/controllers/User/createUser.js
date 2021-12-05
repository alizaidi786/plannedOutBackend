const responseConstant = require("../../constants/response.constants");
const db = require("../../helpers/db/index");
const response = require("../../helpers/response.maker");
const users = require("../../model/user.model");

module.exports.create = async (data) => {
  var Connection = await db.connectToDatabase();
  var UserModel = Connection.model("users");
  var { userName, email, password, profilePic } = data;

  let UserData = {
    userName,
    email,
    password,
    profilePic
  };

  var ins = new UserModel(UserData);
  return await ins
    .save()
    .then(async (data) => {
      return await response.success(
        responseConstant.USER.CREATE_USER_SUCCESS,
        data
      );
    })
    .catch(async (e) => {
      return await response.error(responseConstant.USER.CREATE_USER_ERROR, {
        message: e,
      });
    });
};
