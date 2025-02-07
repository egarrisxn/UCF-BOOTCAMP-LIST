// Set up HTML routes
const path = require("path"); // import the path module for working with file paths

module.exports = (app) => {

  // Send the notes.html file
  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html")); // send the notes.html file as a response
  });

  // Send the index.html file for all other routes
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html")); // send the index.html file as a response
  })
};