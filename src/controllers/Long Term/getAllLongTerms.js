const responseConstant = require("../../constants/response.constants");
const db = require("../../helpers/db/index");
const response = require("../../helpers/response.maker");

module.exports.getAll = async ( ) => {
  var Connection = await db.connectToDatabase();
  var LongTermModel = Connection.model("longterms");

  return await LongTermModel.find( {isDeleted: {$ne: true}} )
    .then(async (data) => {
      return await response.success(
        responseConstant.LONG_TERM.GET_ONE_LONG_TERM_SUCCESS,
        data
      );
    })
    .catch(async (e) => {
      return await response.error(
        responseConstant.LONG_TERM.GET_ONE_LONG_TERM_ERROR,
        { message: e }
      );
    });
};
