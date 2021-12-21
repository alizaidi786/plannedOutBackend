const { create } = require("./createLongTerm");
const { get } = require("./getLongTerm");
const { getAll }  = require("./getAllLongTerms");
const { update } = require("./updateLongTerm");
const Delete = require("./deleteLongTerm");

module.exports.create = async (req, res) => {
  create(req.body).then((data) => {
    res.json(data);
  });
};

module.exports.get = async (req, res) => {
  if(req.query.id){
    get(req.query.id).then((data) => {
      res.json(data);
    });
  } else{
    getAll().then((data)=>{
      res.json(data)
    })
  }
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
