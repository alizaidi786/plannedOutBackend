const responseConstant = require("../../constants/response.constants");
const db = require("../../helpers/db/index");
const response = require("../../helpers/response.maker");

module.exports.get = async (id) => {
  var Connection = await db.connectToDatabase();
  var UserPreferenceModel = Connection.model("userpreferences");

  return await UserPreferenceModel.findById( id )
    .then(async (data) => {
      return await response.success(
        responseConstant.USER_PREFERENCE.GET_ONE_USER_PREFERENCE_SUCCESS,
        data
      );
    })
    .catch(async (e) => {
      return await response.error(
        responseConstant.USER_PREFERENCE.GET_ONE_USER_PREFERENCE_ERROR,
        { message: e }
      );
    });
};
