const responseConstant = require("../../constants/response.constants");
const db = require("../../helpers/db/index");
const response = require("../../helpers/response.maker");

module.exports.update = async (data) => {
    var Connection = await db.connectToDatabase();
    var ActivityModel = Connection.model("activities");
  
    var body = data;
  
    let ActivityData = {
      ...body,
    };
    
    return await ActivityModel.findByIdAndUpdate(body.id, ActivityData, {new: true})
      .then(async (data) => {
        return await response.success(
          responseConstant.ACTIVITY.UPDATE_ACTIVITY_SUCCESS,
          data
        );
      })
      .catch(async (e) => {
        return await response.error(
          responseConstant.ACTIVITY.UPDATE_ACTIVITY_ERROR,
          { message: e }
        );
      });
  };
  