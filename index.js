// ### User Story

// ```md
// AS a freelance web developer
// I WANT to generate a simple logo for my projects
// SO THAT I don't have to pay a graphic designer
// ```

// ## Acceptance Criteria

// ```md
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered
// ```

const inquirer = require("inquirer");
const fs = require("fs");
const {triangle, circle, square} = require("./lib/shapes.js");

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
        type: "input",
        message: "Pick a shape (circle, triangle, square).",
        name: "shape",
    },
    {
        type: "input",
        message: "Pick a shape color.",
        name: "shapeColour",
    },
]

function writeToFile (fileName, text) {
    fs.writeFile(fileName, new shapes(text), 
    (err) => err ? console.error(err) : console.log("Generated logo.svg."));
}

function init() {
    inquirer.prompt(questions)
    .then(function(text) {
        writeToFile("logo.svg", text);
    })
    .catch(function(error) {
        console.error(error);
    })
}

init();