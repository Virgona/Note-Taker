const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readFromFile, readAndAppend } = require('../helper/fsUtils');



// GET Route for retrieving notes
notes.get('/', (req, res) => {
    readFromFile('../db/db.json').then((data) => res.json(JSON.parse(data)));
    console.log(data);
});

// // POST Route for a new UX/UI tip
// notes.post('/', (req, res) => {
//     console.log(req.body);

//     // get the data from the request body
//     const uId = uuidv4();
//     console.log(uId)
//     // add an id property to that data obj
//     // "add that data prop to the db.json"
//     // get the data from db.json
//     // parse it
//     // add the new notes
//     // write it back to the file
//     // send the user a copy of the new note
// });

module.exports = notes;
