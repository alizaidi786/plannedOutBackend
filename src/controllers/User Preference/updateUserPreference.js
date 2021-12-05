const responseConstant = require("../../constants/response.constants");
const db = require("../../helpers/db/index");
const response = require("../../helpers/response.maker");

module.exports.update = async (data) => {
    var Connection = await db.connectToDatabase();
    var UserPreferenceModel = Connection.model("userpreferences");
  
    var body = data;
  
    let UserPreferenceData = {
      ...body,
    };
  
    return await UserPreferenceModel.findByIdAndUpdate(body.id, UserPreferenceData, {new: true})
      .then(async (data) => {
        return await response.success(
          responseConstant.USER_PREFERENCE.UPDATE_USER_PREFERENCE_SUCCESS,
          data
        );
      })
      .catch(async (e) => {
        return await response.error(
          responseConstant.USER_PREFERENCE.UPDATE_USER_PREFERENCE_ERROR,
          { message: e }
        );
      });
  };
  