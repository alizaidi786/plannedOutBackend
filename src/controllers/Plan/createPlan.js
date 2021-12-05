const responseConstant = require("../../constants/response.constants");
const db = require("../../helpers/db/index");
const response = require("../../helpers/response.maker");

module.exports.create = async (data) => {
    var Connection = await db.connectToDatabase();
  
    var PlanModel = Connection.model("plans");
    var { userId, plan } = data;
  
    let PlanData = {
        userId,
        plan
    };
  
    var ins = new PlanModel(PlanData);
    return await ins
      .save()
      .then(async (data) => {
        return await response.success(
          responseConstant.PLAN.CREATE_PLAN_SUCCESS,
          data
        );
      })
      .catch(async (e) => {
        return await response.error(responseConstant.PLAN.CREATE_PLAN_ERROR, {
          message: e,
        });
      });
  };