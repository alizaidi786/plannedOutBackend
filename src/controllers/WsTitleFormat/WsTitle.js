const { create } = require('./createWsTitleFormat')
const { get } = require("./getAllWsTitleFormat")
const { update } = require("./updateWsTitleFormat")
const Delete = require("./deleteWsTitleFormat")


module.exports.create = async (req, res) => {
    create(req.body)
        .then(data => {
            res.json(data)
        })
}   

module.exports.get = async (req, res) => {
    get()
        .then((data) => {
            res.json(data)
        })
}

module.exports.update = async (req, res) => {
    update(req.body)
        .then((data) => {
            res.json(data)
        })
}

module.exports.delete = async (req, res) => {
    Delete.delete(req.params.id)
        .then((data) => {
            res.json(data)
        })
}