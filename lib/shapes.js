// Created parent Shapes class
class Shapes {
    constructor(text, textColour, shapeColour) {
        this.text = text;
        this.textColour = textColour;
        this.shapeColour = shapeColour;
    }
    // Set up 300x200 SVG image
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`
    }
}

// Created child Triangle class
class Triangle extends Shapes {
    constructor(text, textColour, shapeColour) {
        super(text, textColour, shapeColour);
    }

    // Render will inherit the content from the Shapes class and add its own shapes and text content
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,0 0,200 300,200" fill="${this.shapeColour}"/>
        <text font-size="75" x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColour}">${this.text}</text>
        </svg>`
    }
}

// Created child Circle class
class Circle extends Shapes {
    constructor(text, textColour, shapeColour) {
        super(text, textColour, shapeColour);
    }

    // Render will inherit the content from the Shapes class and add its own shapes and text content
    render () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="100" fill="${this.shapeColour}"/>
        <text font-size="75" x="35%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColour}">${this.text}</text>
        </svg>`
    }
}

// Created child Square class
class Square extends Shapes {
    constructor(text, textColour, shapeColour) {
        super(text, textColour, shapeColour); 
    }

    // Render will inherit the content from the Shapes class and add its own shapes and text content
    render () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="200" height="200" fill="${this.shapeColour}"/>
        <text font-size="75" x="37%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColour}">${this.text}</text>
        </svg>`
    }
}

// shapes from: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes

// Export all the classes so it can be used elsewhere
module.exports = { Shapes, Triangle, Circle, Square };