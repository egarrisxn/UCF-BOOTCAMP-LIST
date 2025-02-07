// Import modules
const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");

// Setup sequelize connection
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3001;

// Setup Handlebars.js engine
const hbs = exphbs.create({ helpers });

// Set session cookie properties
const sess = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 1200000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Session middleware
app.use(session(sess));

// Inform Express.js which template engine to use
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Express Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

// Syncs sequelize with database
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening on http://localhost:3001"));
});
