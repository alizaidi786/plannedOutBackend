const responseConstant = require("../../constants/response.constants");
const db = require("../../helpers/db/index");
const response = require("../../helpers/response.maker");

module.exports.get = async (id) => {
  var Connection = await db.connectToDatabase();
  var QouteModel = Connection.model("qoutes");

  return await QouteModel.findById( id )
    .then(async (data) => {
      return await response.success(
        responseConstant.QOUTE.GET_ONE_QOUTE_SUCCESS,
        data
      );
    })
    .catch(async (e) => {
      return await response.error(
        responseConstant.QOUTE.GET_ONE_QOUTE_ERROR,
        { message: e }
      );
    });
};
