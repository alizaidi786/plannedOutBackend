const responseConstant = require("../../constants/response.constants");
const db = require("../../helpers/db/index");
const response = require("../../helpers/response.maker");

module.exports.delete = async (id) => {
  var Connection = await db.connectToDatabase();
  var ShortTermModel = Connection.model("shortterms");
  let data = {
    isDeleted: true,
  };

  return await ShortTermModel.findByIdAndUpdate(id, data, {new: true})
    .then(async (data) => {
      return await response.success(
        responseConstant.SHORT_TERM.DELETE_SHORT_TERM_SUCCESS,
        data
      );
    })
    .catch(async (e) => {
      return await response.error(
        responseConstant.SHORT_TERM.DELETE_SHORT_TERM_ERROR,
        { message: e }
      );
    });
};
