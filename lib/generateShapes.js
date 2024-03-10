const { Shapes, Triangle, Circle, Square } = require("./shapes.js");

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

module.exports = generateShapes;