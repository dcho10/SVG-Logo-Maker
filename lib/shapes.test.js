// Import shapes.js
const {Shapes, Triangle, Circle, Square} = require("./shapes.js");

// Set up Shapes test
describe ("Shapes", () => {

    // This test will evaluate if a yellow triangle with red ABC is returned
    describe("triangle", () => {
        it(`Should return a YELLOW triangle with RED ABC inside`, () => {

            // Set up test values
            const triangle = new Triangle();
            triangle.text = "ABC"
            triangle.textColour = "red"
            triangle.shapeColour = "yellow"
            
            const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,0 0,200 300,200" fill="yellow"/>
        <text font-size="75" x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" fill="red">ABC</text>
        </svg>`

            // Target .render because that is what you want to evaluate
            expect(triangle.render()).toEqual(expectedSVG)
        });
    });

    // This test will evaluate if a blue circle with black LOL is returned
    describe("circle", () => {
        it(`Should return a BLUE circle with BLACK LOL inside`, () => {

            // Set up test values
            const circle = new Circle();
            circle.text = "LOL"
            circle.textColour = "black"
            circle.shapeColour = "blue"
            
            const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="100" fill="blue"/>
        <text font-size="75" x="35%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="black">LOL</text>
        </svg>`

            // Target .render because that is what you want to evaluate
            expect(circle.render()).toEqual(expectedSVG)
        });
    });

    // This test will evulate if an orange square with green XYZ is returned
    describe("square", () => {
        it(`Should return an ORANGE square with GREEN XYZ inside`, () => {

            // Set up test values
            const square = new Square();
            square.text = "XYZ"
            square.textColour = "green"
            square.shapeColour = "orange"
            
            const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="200" height="200" fill="orange"/>
        <text font-size="75" x="37%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="green">XYZ</text>
        </svg>`

            // Target .render because that is what you want to evaluate
            expect(square.render()).toEqual(expectedSVG)
        });
    });

})

