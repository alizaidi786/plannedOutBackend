const responseConstant = require("../../constants/response.constants");
const db = require("../../helpers/db/index");
const response = require("../../helpers/response.maker");

module.exports.delete = async (id) => {
  var Connection = await db.connectToDatabase();
  var LongTermModel = Connection.model("longterms");
  let data = {
    isDeleted: true,
  };

  return await LongTermModel.findByIdAndUpdate(id, data, {new: true})
    .then(async (data) => {
      return await response.success(
        responseConstant.LONG_TERM.DELETE_LONG_TERM_SUCCESS,
        data
      );
    })
    .catch(async (e) => {
      return await response.error(
        responseConstant.LONG_TERM.DELETE_LONG_TERM_ERROR,
        { message: e }
      );
    });
};
