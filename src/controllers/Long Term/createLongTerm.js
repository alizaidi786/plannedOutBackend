const responseConstant = require("../../constants/response.constants");
const db = require("../../helpers/db/index");
const response = require("../../helpers/response.maker");

module.exports.create = async (data) => {
    var Connection = await db.connectToDatabase();
  
    var LongTermModel = Connection.model("longterms");
    var { title, description, startDate, finishDate, shortTerm } = data;
  
    let LongTermData = {
        title,
        description,
        startDate,
        finishDate,
        shortTerm
    };
  
    var ins = new LongTermModel(LongTermData);
    return await ins
      .save()
      .then(async (data) => {
        return await response.success(
          responseConstant.LONG_TERM.CREATE_LONG_TERM_SUCCESS,
          data
        );
      })
      .catch(async (e) => {
        return await response.error(responseConstant.LONG_TERM.CREATE_LONG_TERM_ERROR, {
          message: e,
        });
      });
  };