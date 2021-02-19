const express = require(`express`);
const app = express();
const session = require(`express-session`);
// firebase authentication?
// const passport = require(`./config/passport`);
const routes = require("./routes");
const sequelize = require(`sequelize`);


// eslint-disable-next-line no-magic-numbers

const db = require(`./models`);

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
