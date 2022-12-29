let timer, 
time = 0,
turns = 0;
rotations = 0;

const WHITE = 1, 
BLUE = 2, 
ORANGE = 3,
GREEN = 4, 
RED = 5,
YELLOW = 6;

const PIECES = {
    topLayer: {
        corner1: [WHITE, BLUE, RED],
        corner2: [WHITE, ORANGE, BLUE],
        corner3: [WHITE, GREEN, ORANGE],
        corner4: [WHITE, RED, GREEN],
        edge1: [WHITE, BLUE],
        edge2: [WHITE, ORANGE],
        edge3: [WHITE, GREEN],
        edge4: [WHITE, RED],
        center: [WHITE]
    },
    middleLayer: {
        edge1: [BLUE, RED],
        edge2: [ORANGE, BLUE],
        edge3: [GREEN, ORANGE],
        edge4: [RED, GREEN],
        center1: [BLUE],
        center2: [ORANGE],
        center3: [GREEN],
        center4: [RED]
    },
    bottomLayer: {
        corner1: [BLUE, RED, YELLOW],
        corner2: [ORANGE, BLUE, YELLOW],
        corner3: [GREEN, ORANGE, YELLOW], 
        corner4: [RED, GREEN, YELLOW],
        edge1: [BLUE, YELLOW],
        edge2: [ORANGE, YELLOW],
        edge3: [GREEN, YELLOW],
        edge4: [RED, YELLOW],
        center: [YELLOW]
    }
};

// Assigning Cubies
let cubieArr = [];
for (let i = 0; i < 9; i++) cubieArr[i] = document.getElementsByClassName("cubie")[i];

// Turns
function turn(keyPressed) {
    if (/r|l|u|d|f|b|m|e|s|x|y|z/i.test(keyPressed) && keyPressed.length === 1) {
        console.log(keyPressed);
    } else return;
    if (turns === 0 && !/x|y|z/i.test(keyPressed)) {
        timer = setInterval(()=>{
            time++;
         }, 10);
    }
    switch (keyPressed) {
        case "r": {
            turns++;
            // Corners
            let temp1 = PIECES.topLayer.corner1;
            let temp2 = PIECES.bottomLayer.corner1;
            PIECES.topLayer.corner1 = PIECES.topLayer.corner2;
            PIECES.bottomLayer.corner1 = temp1;
            temp1 = PIECES.bottomLayer.corner2;
            PIECES.bottomLayer.corner2 = temp2;
            PIECES.topLayer.corner2 = temp1;
            // Edges
            temp1 = PIECES.topLayer.edge1;
            temp2 = PIECES.middleLayer.edge1;
            PIECES.topLayer.edge1 = PIECES.middleLayer.edge2;
            PIECES.middleLayer.edge1 = temp1;
            temp1 = PIECES.bottomLayer.edge1; 
            PIECES.bottomLayer.edge2 = temp2; 
            PIECES.middleLayer.edge2 = temp1; 
        }
        case "l": {
            turns++;
        }
        case "u": {
            turns++;
        }
        case "d": {
            turns++;
        }
        case "f": {
            turns++;
        }
        case "b": {
            turns++;
        }
        case "m": {
            turns+=2;
        }
        case "e": {
            turns+=2;
        }
        case "s": {
            turns+=2;
        }
        case "x": {
            rotations++;
        }
        case "y": {
            rotations++;
        }
        case "z": { 
            rotations++;
        }
    }
}
document.body.addEventListener("keydown", e => turn(e.key));

// Render cube
function render() {

}