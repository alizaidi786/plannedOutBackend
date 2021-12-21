const responseConstant = require("../../constants/response.constants");
const db = require("../../helpers/db/index");
const response = require("../../helpers/response.maker");

module.exports.update = async (data) => {
    var Connection = await db.connectToDatabase();
    var LongTermModel = Connection.model("longterms");
  
    var body = data;
  
    let LongTermData = {
      ...body,
    };
  
    return await LongTermModel.findByIdAndUpdate(body.id, LongTermData, {new: true})
      .then(async (data) => {
        return await response.success(
          responseConstant.LONG_TERM.UPDATE_LONG_TERM_SUCCESS,
          data
        );
      })
      .catch(async (e) => {
        return await response.error(
          responseConstant.LONG_TERM.UPDATE_LONG_TERM_ERROR,
          { message: e }
        );
      });
  };
  