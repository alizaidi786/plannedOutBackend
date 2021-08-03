const { get } = require("./getContent")

module.exports.get = async (req, res) => {
    get(req.body)
        .then((data) => {
            res.json(data)
        })
}