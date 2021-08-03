const responseConstant = require("../../constants/response.constants");
const db = require("../../helpers/db/index");
const response = require("../../helpers/response.maker");

module.exports.create = async (data) => {
  var Connection = await db.connectToDatabase();

  var TitleModel = Connection.model("ws_titles");

  var {
    name,
    priority,
    preferencesCategoryId,
    subCategoryId,
    learningSkills,
    isActive,
    guideline,
    remarks,
  } = data;

  let titleData = {
    name,
    priority,
    preferencesCategoryId,
    subCategoryId,
    guideline,
    learningSkills,
    isActive,
    remarks,
  };
  var ins = new TitleModel(titleData);
  return await ins
    .save()
    .then(async () => {
      return await response.success(
        responseConstant.WS_TITLE.CREATE_WS_TITLE_SUCCESS,
        titleData
      );
    })
    .catch(async (e) => {
      return await response.error(
        responseConstant.WS_TITLE.CREATE_WS_TITLE_ERROR,
        { message: e }
      );
    });
};
