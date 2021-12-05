const responseConstant = require("../../constants/response.constants");
const db = require("../../helpers/db/index");
const response = require("../../helpers/response.maker");

module.exports.update = async (data) => {
    var Connection = await db.connectToDatabase();
    var PlanModel = Connection.model("plans");
  
    var body = data;
  
    let PlanData = {
      ...body,
    };
  
    return await PlanModel.findByIdAndUpdate(body.id, PlanData, {new: true})
      .then(async (data) => {
        return await response.success(
          responseConstant.PLAN.UPDATE_PLAN_SUCCESS,
          data
        );
      })
      .catch(async (e) => {
        return await response.error(
          responseConstant.PLAN.UPDATE_PLAN_ERROR,
          { message: e }
        );
      });
  };
  