// Import modules
const express = require("express");

// Set up the Express server
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse incoming requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Set up API routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Start the server and listen for incoming requests
app.listen(PORT, () => {
  console.log(`The server is now available at http://localhost:${PORT}`);
});
