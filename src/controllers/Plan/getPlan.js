const responseConstant = require("../../constants/response.constants");
const db = require("../../helpers/db/index");
const response = require("../../helpers/response.maker");

module.exports.get = async (id) => {
  var Connection = await db.connectToDatabase();
  var PlanModel = Connection.model("plans");

  return await PlanModel.findById( id )
    .then(async (data) => {
      return await response.success(
        responseConstant.PLAN.GET_ONE_PLAN_SUCCESS,
        data
      );
    })
    .catch(async (e) => {
      return await response.error(
        responseConstant.PLAN.GET_ONE_PLAN_ERROR,
        { message: e }
      );
    });
};
