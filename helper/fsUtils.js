const fs = require('fs');
const util = require('util');

// promised version of fs.readfile
const readFromFile = util.promisify(fs.readFile);

//writes data to the JSON file if given destination and content
const writeToFile = (destination, content) =>
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
        err ? console.error(err) : console.info(`\nData written to ${destination}`)
    );
//reads data from a given file and appends content 
const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(content);
            writeToFile(file, parsedData)
        }
    });
};

module.exports = { readFromFile, writeToFile, readAndAppend };