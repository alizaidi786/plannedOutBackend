const responseConstant = require("../../constants/response.constants");
const db = require("../../helpers/db/index");
const response = require("../../helpers/response.maker");

module.exports.update = async (data) => {
    var Connection = await db.connectToDatabase();
    var ShortTermModel = Connection.model("shortterms");
  
    var body = data;
  
    let ShortTermData = {
      ...body,
    };
  
    return await ShortTermModel.findByIdAndUpdate(body.id, ShortTermData, {new: true})
      .then(async (data) => {
        return await response.success(
          responseConstant.SHORT_TERM.UPDATE_SHORT_TERM_SUCCESS,
          data
        );
      })
      .catch(async (e) => {
        return await response.error(
          responseConstant.SHORT_TERM.UPDATE_SHORT_TERM_ERROR,
          { message: e }
        );
      });
  };
  