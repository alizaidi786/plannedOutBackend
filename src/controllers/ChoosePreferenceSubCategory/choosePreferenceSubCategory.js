const { create } = require("./createChoosePreferenceSubCategory");
const { get } = require("./getOneChoosePreferenceSubCategory");
const { update } = require("./updateChoosePreferenceSubCategory");
const Delete = require("./deleteChoosePreferenceSubCategory");

module.exports.create = async (req, res) => {
  create(req.body).then((data) => {
    res.json(data);
  });
};

module.exports.get = async (req, res) => {
  get(req.query.id).then((data) => {
    res.json(data);
  });
};

module.exports.update = async (req, res) => {
  update(req.body).then((data) => {
    res.json(data);
  });
};

module.exports.delete = async (req, res) => {
  Delete.delete(req.query.id).then((data) => {
    res.json(data);
  });
};
