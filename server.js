const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

const PORT = process.env.port || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// pattern for defining api routes
app.use('/api', api);

// helps keep your client routes togehert
app.use(express.static('public'));

// GET Route for notes
app.get('/notes', (req, res) =>
    // sned the notes page
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET Route for index page
app.get('*', (req, res) =>
    // send the index page
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);
