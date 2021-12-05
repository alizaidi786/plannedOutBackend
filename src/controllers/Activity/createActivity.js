const responseConstant = require("../../constants/response.constants");
const db = require("../../helpers/db/index");
const response = require("../../helpers/response.maker");
const activities = require("../../model/activity.model");

module.exports.create = async (data) => {
    var Connection = await db.connectToDatabase();
  
    var ActivityModel = Connection.model("activities");
    var { userId, title, summary, image,discussion } = data;
  
    let ActivityData = {
        userId,
         title,
        summary,
         image,
         discussion
    };
  
    var ins = new ActivityModel(ActivityData);
    return await ins
      .save()
      .then(async (data) => {
        return await response.success(
          responseConstant.ACTIVITY.CREATE_ACTIVITY_SUCCESS,
          data
        );
      })
      .catch(async (e) => {
        return await response.error(responseConstant.ACTIVITY.CREATE_ACTIVITY_ERROR, {
          message: e,
        });
      });
  };