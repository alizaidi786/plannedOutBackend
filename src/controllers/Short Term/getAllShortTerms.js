const responseConstant = require("../../constants/response.constants");
const db = require("../../helpers/db/index");
const response = require("../../helpers/response.maker");

module.exports.getAll = async ( ) => {
  var Connection = await db.connectToDatabase();
  var ShortTermModel = Connection.model("shortterms");

  return await ShortTermModel.find( {isDeleted: {$ne: true}} )
    .then(async (data) => {
      return await response.success(
        responseConstant.SHORT_TERM.GET_ONE_SHORT_TERM_SUCCESS,
        data
      );
    })
    .catch(async (e) => {
      return await response.error(
        responseConstant.SHORT_TERM.GET_ONE_SHORT_TERM_ERROR,
        { message: e }
      );
    });
};
