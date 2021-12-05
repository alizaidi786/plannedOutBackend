const { create } = require("./createUser");
const { get } = require("./getUser");
const { getOne } = require("./getUserById");
// const { update } = require("./updateConversation");
// const Delete = require("./deleteMessages");

module.exports.create = async (req, res) => {
  create(req.body).then((data) => {
    res.json(data);
  });
};

module.exports.get = async (req, res) => {
  if (req.query.id) {
    getOne(req.query.id).then((data) => {
      res.json(data);
    });
  } else {
    get(req.query.email, req.query.password).then((data) => {
      res.json(data);
    });
  }
};

// module.exports.update = async (req, res) => {
//   update(req.body).then((data) => {
//     res.json(data);
//   });
// };

// module.exports.delete = async (req, res) => {
//   Delete.delete(req.query.id).then((data) => {
//     res.json(data);
//   });
// };
