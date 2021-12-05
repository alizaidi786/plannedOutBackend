const responseConstant = require("../../constants/response.constants");
const db = require("../../helpers/db/index");
const response = require("../../helpers/response.maker");

module.exports.delete = async (id) => {
  var Connection = await db.connectToDatabase();
  var SignupDetailsModel = Connection.model("signup_details");
  let data = {
    isDeleted: true,
  };

  return await SignupDetailsModel.findByIdAndUpdate(id, data)
    .then(async (data) => {
      return await response.success(
        responseConstant.SIGNUP_DETAILS.DELETE_SIGNUP_DETAILS_SUCCESS,
        data
      );
    })
    .catch(async (e) => {
      return await response.error(
        responseConstant.SIGNUP_DETAILS.DELETE_SIGNUP_DETAILS_ERROR,
        { message: e }
      );
    });
};
