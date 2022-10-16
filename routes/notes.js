const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readFromFile, readAndAppend, writeToFile } = require('../helper/fsUtils');
const fs = require('fs');



// GET Route for retrieving notes
notes.get('/', (req, res) => {
    readFromFile('db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new note added to UI
notes.post('/', (req, res) => {
    console.log(req.body);
    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };

        readAndAppend(newNote, 'db/db.json');
        res.json('note added successfully!');

    } else {
        res.errored('Error adding note :(');
    }
});

notes.delete('/:id', (req, res) => {
    readFromFile('db/db.json')
        .then((data) => {
            var newData = [];
            let parsedData = JSON.parse(data)
            for (let i = 0; i < parsedData.length; i++) {
                if (parsedData[i].id != req.params.id) {
                    newData.push(parsedData[i])
                }
            }
            writeToFile('db/db.json', newData);
            res.json({});
        });
}
);



module.exports = notes;
