module.exports = function (app) {
  // var Signup = require("./controllers/SignupDetails/SignupData");
  var Messages = require("./controllers/Messages/messages");
  var Conversation = require("./controllers/Coversation/conversation");
  var User = require("./controllers/User/user");
  var Activity = require("./controllers/Activity/activity");
  var Friend = require("./controllers/Friend/friend");
  var Plan = require("./controllers/Plan/plan");
  var Qoute = require("./controllers/Qoute/qoute");
  var UserPreference = require("./controllers/User Preference/userPreference");
  // // app
  // //     .route("/signup-details/:id?")
  // //     .put(Signup.create)
  // //     .get(Signup.get)
  // //     .post(Signup.update)
  //     .delete(Signup.delete);
  app
    .route("/conversation/:id?")
    .put(Conversation.create)
    .get(Conversation.get);
  app.route("/messages/:id?").put(Messages.create).get(Messages.get);
  app.route("/user/:id?").put(User.create).get(User.get);
  app
  .route("/activity/:id?")
  .put(Activity.create)
  .get(Activity.get)
  .post(Activity.update)
  .delete(Activity.delete);
  app
  .route("/friend/:id?")
  .put(Friend.create)
  .get(Friend.get)
  .post(Friend.update)
  .delete(Friend.delete);
  app
  .route("/plan/:id?")
  .put(Plan.create)
  .get(Plan.get)
  .post(Plan.update)
  .delete(Plan.delete);
  app
  .route("/qoute/:id?")
  .put(Qoute.create)
  .get(Qoute.get)
  .post(Qoute.update)
  .delete(Qoute.delete);
  app
  .route("/userPreference/:id?")
  .put(UserPreference.create)
  .get(UserPreference.get)
  .post(UserPreference.update)
  .delete(UserPreference.delete);
};
