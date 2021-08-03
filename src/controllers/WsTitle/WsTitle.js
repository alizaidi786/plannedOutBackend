const { create } = require('./createWsTitle')
const { get } = require("./getAllWsTitle")
const { update } = require("./updateWsTitle")
const Delete = require("./deleteWsTitle")


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