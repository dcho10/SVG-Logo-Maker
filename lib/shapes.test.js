const {Shapes, Triangle, Circle, Square} = require("./shapes.js");

describe ("Shapes", () => {
    describe("triangle", () => {
        it(`Should return a YELLOW triangle with RED ABC inside`, () => {
            const triangle = new Triangle();
            triangle.text = "ABC"
            triangle.textColour = "red"
            triangle.shapeColour = "yellow"
            
            const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,0 0,200 300,200" fill="yellow"/>
        <text font-size="75" x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" fill="red">ABC</text>
        </svg>`

            expect(triangle.render()).toEqual(expectedSVG)
        });
    });

    describe("circle", () => {
        it(`Should return a BLUE circle with BLACK LOL inside`, () => {
            const circle = new Circle();
            circle.text = "LOL"
            circle.textColour = "black"
            circle.shapeColour = "blue"
            
            const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="100" fill="blue"/>
        <text font-size="75" x="35%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="black">LOL</text>
        </svg>`

            expect(circle.render()).toEqual(expectedSVG)
        });
    });

    describe("square", () => {
        it(`Should return an ORANGE square with GREEN XYZ inside`, () => {
            const square = new Square();
            square.text = "XYZ"
            square.textColour = "green"
            square.shapeColour = "orange"
            
            const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="200" height="200" fill="orange"/>
        <text font-size="75" x="37%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="green">XYZ</text>
        </svg>`

            expect(square.render()).toEqual(expectedSVG)
        });
    });

})

