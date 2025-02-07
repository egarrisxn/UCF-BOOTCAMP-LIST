// Set up API routes
const path = require("path"); // import the path module for working with file paths
const fs = require("fs"); // import the fs module for working with the file system
const uniqid = require("uniqid"); // import the uniqid module for generating unique IDs

module.exports = (app) => {

  // Get all notes from the db
  app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../db/db.json")); // send the db.json file as a response
  });

  // Add a new note to the db
  app.post("/api/notes", (req, res) => {
    let db = fs.readFileSync("db/db.json"); // read the db.json file
    db = JSON.parse(db); // parse the JSON data

    let userNote = {
      title: req.body.title,
      text: req.body.text,
      id: uniqid(),
    };

    db.push(userNote); // add the new note to the array
    fs.writeFileSync("db/db.json", JSON.stringify(db)); // write the updated array to the db.json file
    res.json(db); // send the updated array as a response

  });

  // Delete a note from the db
  app.delete("/api/notes/:id", (req, res) => {
    let db = JSON.parse(fs.readFileSync("db/db.json")); // read the db.json file and parse the JSON data

    let deleteNotes = db.filter(item => item.id !== req.params.id); // filter out the note to be deleted

    fs.writeFileSync("db/db.json", JSON.stringify(deleteNotes)); // write the updated array to the db.json file
    res.json(deleteNotes); // send the updated array as a response
  })
};