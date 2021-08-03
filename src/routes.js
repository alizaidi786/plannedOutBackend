
module.exports = function (app) {

    var Category = require("./controllers/PreferenceCategory/PreferenceCategory")
    var SubCategory = require("./controllers/SubCategory/SubCategory")
    var WsTheme = require("./controllers/WsTheme/WsTheme")
    var WsTitle = require("./controllers/WsTitle/WsTitle")
    var WsTitleFormat = require("./controllers/WsTitleFormat/WsTitle")
    var WsTitleMis = require("./controllers/WsTitleMis/WsTitleMis")
    var Worksheet = require("./controllers/worksheet/Worksheet")
    var WsGrade = require("./controllers/WsGrade/WsGrade")
    var Content = require("./controllers/Content/Content")
    
    app.route('/category/:id?')
        .put(Category.create)
        .get(Category.get)
        .post(Category.update)
        .delete(Category.delete)

    app.route('/category-tree')
        .get(Category.getCategoryTree)

    app.route('/sub-category/:id?')
        .put(SubCategory.create)
        .get(SubCategory.get)
        .post(SubCategory.update)
        .delete(SubCategory.delete)

    app.route('/ws-theme/:id?')
        .put(WsTheme.create)
        .get(WsTheme.get)
        .post(WsTheme.update)
        .delete(WsTheme.delete)

    app.route('/ws-title/:id?')
        .put(WsTitle.create)
        .get(WsTitle.get)
        .post(WsTitle.update)
        .delete(WsTitle.delete)

    app.route('/ws-title-format/:id?')
        .put(WsTitleFormat.create)
        .get(WsTitleFormat.get)
        .post(WsTitleFormat.update)
        .delete(WsTitleFormat.delete)

    app.route('/ws-title-mis/:id?')
        .put(WsTitleMis.create)
        .get(WsTitleMis.get)
        .post(WsTitleMis.update)
        .delete(WsTitleMis.delete)

    app.route('/worksheet/:id?')
        .put(Worksheet.create)
        .get(Worksheet.get)
        .post(Worksheet.update)
        .delete(Worksheet.delete)

    app.route('/ws-grade/:id?')
        .put(WsGrade.create)
        .get(WsGrade.get)
        .post(WsGrade.update)
        .delete(WsGrade.delete)

    app.route('/contents')
        .post(Content.get)
}
