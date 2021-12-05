const responseConstant = require("../../constants/response.constants");
const db = require("../../helpers/db/index");
const response = require("../../helpers/response.maker");

module.exports.create = async (data) => {
    var Connection = await db.connectToDatabase();
  
    var QouteModel = Connection.model("qoutes");
    var { writer, qoutes } = data;
  
    let QouteData = {
        writer,
        qoutes
    };
  
    var ins = new QouteModel(QouteData);
    return await ins
      .save()
      .then(async (data) => {
        return await response.success(
          responseConstant.QOUTE.CREATE_QOUTE_SUCCESS,
          data
        );
      })
      .catch(async (e) => {
        return await response.error(responseConstant.QOUTE.CREATE_QOUTE_ERROR, {
          message: e,
        });
      });
  };