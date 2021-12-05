const responseConstant = require("../../constants/response.constants");
const db = require("../../helpers/db/index");
const response = require("../../helpers/response.maker");

module.exports.delete = async (id) => {
  var Connection = await db.connectToDatabase();
  var QouteModel = Connection.model("qoutes");
  let data = {
    isDeleted: true,
  };

  return await QouteModel.findByIdAndUpdate(id, data, {new: true})
    .then(async (data) => {
      return await response.success(
        responseConstant.QOUTE.DELETE_QOUTE_SUCCESS,
        data
      );
    })
    .catch(async (e) => {
      return await response.error(
        responseConstant.QOUTE.DELETE_QOUTE_ERROR,
        { message: e }
      );
    });
};
