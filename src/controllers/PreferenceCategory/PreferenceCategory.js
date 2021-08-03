const { create } = require('./createPreferenceCategory')
const { get } = require("./getAllPreferenceCategory")
const { update } = require("./updatePreferenceCategory")
const Delete = require("./deletePreferenceCategory")
const categoryTree  = require("./getPreferenceCategoryTree")

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

module.exports.getCategoryTree = async (req, res) => {
    categoryTree.get()
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