const responseConstant = require("../../constants/response.constants");
const db = require("../../helpers/db/index");
const response = require("../../helpers/response.maker");

module.exports.create = async (data) => {
    var Connection = await db.connectToDatabase();
  
    var UserPreferenceModel = Connection.model("userpreferences");
    var { userId, preferences } = data;
  
    let UserPreferenceData = {
        userId,
        preferences
    };
  
    var ins = new UserPreferenceModel(UserPreferenceData);
    return await ins
      .save()
      .then(async (data) => {
        return await response.success(
          responseConstant.USER_PREFERENCE.CREATE_USER_PREFERENCE_SUCCESS,
          data
        );
      })
      .catch(async (e) => {
        return await response.error(responseConstant.USER_PREFERENCE.CREATE_USER_PREFERENCE_ERROR, {
          message: e,
        });
      });
  };