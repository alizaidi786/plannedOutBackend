const responseConstant = require("../../constants/response.constants");
const db = require("../../helpers/db/index");
const response = require("../../helpers/response.maker");

module.exports.delete = async (id) => {
  var Connection = await db.connectToDatabase();
  var ActivityModel = Connection.model("activities");
  let data = {
    isDeleted: true,
  };

  return await ActivityModel.findByIdAndUpdate(id, data, {new: true})
    .then(async (data) => {
      return await response.success(
        responseConstant.ACTIVITY.DELETE_ACTIVITY_SUCCESS,
        data
      );
    })
    .catch(async (e) => {
      return await response.error(
        responseConstant.ACTIVITY.DELETE_ACTIVITY_ERROR,
        { message: e }
      );
    });
};
