const responseConstant = require("../../constants/response.constants");
const db = require("../../helpers/db/index");
const response = require("../../helpers/response.maker");

module.exports.delete = async (id) => {
  var Connection = await db.connectToDatabase();
  var PlanModel = Connection.model("plans");
  let data = {
    isDeleted: true,
  };

  return await PlanModel.findByIdAndUpdate(id, data,{new: true})
    .then(async (data) => {
      return await response.success(
        responseConstant.PLAN.DELETE_PLAN_SUCCESS,
        data
      );
    })
    .catch(async (e) => {
      return await response.error(
        responseConstant.PLAN.DELETE_PLAN_ERROR,
        { message: e }
      );
    });
};
