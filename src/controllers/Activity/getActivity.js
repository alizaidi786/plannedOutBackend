const responseConstant = require("../../constants/response.constants");
const db = require("../../helpers/db/index");
const response = require("../../helpers/response.maker");

module.exports.get = async (id) => {
  var Connection = await db.connectToDatabase();
  var ActivityModel = Connection.model("activities");

  return await ActivityModel.findById( id )
    .then(async (data) => {
      return await response.success(
        responseConstant.ACTIVITY.GET_ONE_ACTIVITY_SUCCESS,
        data
      );
    })
    .catch(async (e) => {
      return await response.error(
        responseConstant.ACTIVITY.GET_ONE_ACTIVITY_ERROR,
        { message: e }
      );
    });
};
