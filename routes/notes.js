const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
// require

// GET Route for retrieving all the tips
notes.get('/', (req, res) => {
    // get the info from notes.json and send it to the client
});

// POST Route for a new UX/UI tip
notes.post('/', (req, res) => {
    console.log(req.body);
    // get the data from the request body
    const uId = uuidv4();
    console.log(uId)
    // add an id property to that data obj
    // "add that data prop to the db.json"
    // get the data from db.json
    // parse it
    // add the new notes
    // write it back to the file
    // send the user a copy of the new note
});

module.exports = notes;
