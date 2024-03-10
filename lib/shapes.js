class Shapes {
    constructor(text, textColour, shapeColour) {
        this.text = text;
        this.textColour = textColour;
        this.shapeColour = shapeColour;
    }

    render() {
        return `<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">

        <text font-size="75" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColour}">${this.text}</text>
        
        `
    }
}

// shapes from: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes

class Triangle extends Shapes {
    constructor(text, textColour, shapeColour) {
        super(text, textColour, shapeColour);
    }

    render() {
        return `<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">

        <polygon points="250,30 0,470 500,470" fill="${this.shapeColour}"/>

        <text font-size="75" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColour}">${this.text}</text>

        </svg>
        `
    }
}

class Circle extends Shapes {
    constructor(text, textColour, shapeColour) {
        super(text, textColour, shapeColour);
    }

    render () {
        return `<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">

        <circle cx="250" cy="250" r="250" fill="${this.shapeColour}"/>

        <text font-size="75" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColour}">${this.text}</text>

        </svg>
        `
    }
}

class Square extends Shapes {
    constructor(text, textColour, shapeColour) {
        super(text, textColour, shapeColour); 
    }

    render () {
        return `<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">

        <rect x="10" y="10" width="500" height="500" fill="${this.shapeColour}"/>

        <text font-size="75" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColour}">${this.text}</text>

        </svg>
        `
    }
}

module.exports = {
    Shapes, 
    Triangle, 
    Circle, 
    Square
};