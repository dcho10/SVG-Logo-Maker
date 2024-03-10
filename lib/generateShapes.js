// Import shapes.js
const { Shapes, Triangle, Circle, Square } = require("./shapes.js");

// Take the data from the prompt and generate the objects
function generateShapes(data) {
    let shape;

    if (data.shape === "Triangle") {
        shape = new Triangle (data.text, data.textColour, data.shapeColour);
    } else if (data.shape === "Circle") {
        shape = new Circle (data.text, data.textColour, data.shapeColour);
    } else if (data.shape === "Square") {
        shape = new Square (data.text, data.textColour, data.shapeColour);
    } 
    
    return shape.render();
    };

// Export so it can be used elsewhere
module.exports = generateShapes;