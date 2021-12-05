const responseConstant = require("../../constants/response.constants");
const db = require("../../helpers/db/index");
const response = require("../../helpers/response.maker");

module.exports.update = async (data) => {
  var Connection = await db.connectToDatabase();
  var SignupDetailsModel = Connection.model("signup_details");

  var body = data;

  let SignupDetailsData = {
    ...body,
  };

  return await SignupDetailsModel.findByIdAndUpdate(body.id, SignupDetailsData,{new: true})
    .then(async (data) => {
      return await response.success(
        responseConstant.SIGNUP_DETAILS.UPDATE_SIGNUP_DETAILS_SUCCESS,
        data
      );
    })
    .catch(async (e) => {
      return await response.error(
        responseConstant.SIGNUP_DETAILS.UPDATE_SIGNUP_DETAILS_SUCCESS,
        { message: e }
      );
    });
};
