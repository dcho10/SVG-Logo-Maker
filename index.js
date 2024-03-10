// Set up imports
const inquirer = require("inquirer");
const fs = require("fs");
const generateShapes = require("./lib/generateShapes.js");

// Set up prompt questions
const questions = [
    
    {
        type: "input",
        message: "Pick up to 3 characters.",
        name: "text",
    },
    {
        type: "input",
        message: "Pick a text colour.",
        name: "textColour",
    },
    {
        type: "list",
        message: "Pick a shape.",
        choices: ["Circle", "Triangle", "Square"],
        name: "shape",
    },
    {
        type: "input",
        message: "Pick a shape color.",
        name: "shapeColour",
    },
]

// Created a function to collect the data and write it to a file
function writeToFile (fileName, data) {
    fs.writeFile(fileName, generateShapes(data), (err) => 
    err ? console.error(err) : console.log("Generated logo.svg."));
}

// Created a function to process the inquirer prompt answers and write it to "logo.svg" file and to catch any errors along and log them the way
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("logo.svg", data);
    })
    .catch(function(error) {
        console.error(error);
    })
}

init();