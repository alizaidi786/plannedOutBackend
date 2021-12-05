const { create } = require("./createMessages");
const { get } = require("./getMessages");
const { update } = require("./updateConversation");
const Delete = require("./deleteMessages");

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
