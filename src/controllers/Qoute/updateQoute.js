const responseConstant = require("../../constants/response.constants");
const db = require("../../helpers/db/index");
const response = require("../../helpers/response.maker");

module.exports.update = async (data) => {
    var Connection = await db.connectToDatabase();
    var QouteModel = Connection.model("qoutes");
  
    var body = data;
  
    let QouteData = {
      ...body,
    };
  
    return await QouteModel.findByIdAndUpdate(body.id, QouteData, {new: true})
      .then(async (data) => {
        return await response.success(
          responseConstant.QOUTE.UPDATE_QOUTE_SUCCESS,
          data
        );
      })
      .catch(async (e) => {
        return await response.error(
          responseConstant.QOUTE.UPDATE_QOUTE_ERROR,
          { message: e }
        );
      });
  };
  