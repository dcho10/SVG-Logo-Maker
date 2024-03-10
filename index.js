const inquirer = require("inquirer");
const fs = require("fs");
const generateShapes = require("./lib/generateShapes.js");

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

function writeToFile (fileName, data) {
    fs.writeFile(fileName, generateShapes(data), (err) => 
    err ? console.error(err) : console.log("Generated logo.svg."));
}

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