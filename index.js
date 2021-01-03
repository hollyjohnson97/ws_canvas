/*
 * This is index.js
 * Start by modifying the id function to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';


// draws a stick figure on the canvas
// the stick figure will stand over the point X,Y (default: 100,150)
// facing is a degree in which the stick figure is facing: 0 is to the right, 90 is towards us
function drawStickFigure(el, x, y, facing) {
    const c = el.getContext("2d");

    // set our drawing style
    c.lineWidth = 2;
    c.lineCap = "round";
    c.lineJoin = "round"
    c.strokeStyle = "#000";

    if (x == null) x = 100;
    if (y == null) y = 150;

    // the arms and the legs look the same
    drawLimbs(c, x, y)            // legs
    drawLimbs(c, x, y - 40)         // arms

    // body is just a line
    line(c, x, y - 40, x, y - 80)     // body

    // head is a circle with eyes and a smile
    circle(c, x, y - 100, 20)       // head
    drawFace(c, x, y - 100, facing) // face

    //sword
    drawSword(c, 120, 110, 170, 60, 130, 90, 140, 100);

    // helpful functions start here
    function drawLimbs(c, x, y) {
        line(c, x - 20, y, x, y - 40)
        line(c, x + 20, y, x, y - 40)
    }

    function drawFace(c, x, y, facing) {
        // if the `facing` parameter is not given, the stick figure will face towards us
        if (facing == null) facing = 90;

        // make sure the `facing` parameter is between 0 and 360
        facing = facing % 360; // that's like the mathematical remainder after a division
        if (facing < 0) facing += 360;

        if (facing > 180) return;  // facing away from us, don't draw a face

        // we'll fake the turning of the face by shifting the eyes and the smile by an offset of up to 10 pixels
        let faceOffset = 0;
        if (facing <= 180) {
            faceOffset = (facing - 90) / 9;
        }

        circle(c, x - 7 - faceOffset, y - 5, 1)  // 7 is distance from center, 5 is how high the eyes are from the head's center, 1 is eye size
        circle(c, x + 7 - faceOffset, y - 5, 1)

        // decrease the smile size here
        const smileSize = 70; // size of smile in degrees of angle; 360 would be a full circle
        const startAngle = rad(90 - smileSize / 2 - 2 * faceOffset)
        const endAngle = rad(90 + smileSize / 2 - 2 * faceOffset)
        arc(c, x - faceOffset, y, 12, startAngle, endAngle) // 12 is the radius of the smile circle
    }

    // draw a line on canvas context `c`, from point x1,y1 to point x2,y2
    function line(c, x1, y1, x2, y2) {
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x2, y2);
        c.stroke();
    }

    // draw a circle on canvas context `c`, centered on x,y, with radius r
    // also fill the circle with white (so it's not transparent)
    function circle(c, x, y, r) {
        c.beginPath()
        c.fillStyle = "#fff"
        c.arc(x, y, r, 0, 6.3, false); // 6.3 is bigger than 2π so the arc will be a whole circle
        c.fill()
        c.stroke()
    }


    // draw an arc on canvas context `c`, cenetered on x,y, with radius r, from angleStart to angleEnd
    function arc(c, x, y, r, angleStart, angleEnd) {
        c.beginPath();
        c.arc(x, y, r, angleStart, angleEnd, false)
        c.stroke();
    }

    //draw sword
    function drawSword(c, x1, y1, x2, y2, x3, y3, x4, y4) {
        line(c, x1, y1, x2, y2);
        line(c, x3, y3, x4, y4);
    }

    // convert from degrees to radians
    function rad(x) {
        return x * Math.PI / 180;
    }

}

//draws parallel lines
function drawLines(canvas) {
    const c = canvas.getContext('2d');

    c.beginPath();
    c.moveTo(100, 100);
    c.lineTo(500, 100);
    c.stroke();

    c.beginPath();
    c.moveTo(100, 200);
    c.lineTo(300, 200);
    c.stroke();
}

//draws a triangle with red line and green fill
function drawTriangle(canvas, x1, y1, x2, y2, x3, y3) {
    const c = canvas.getContext('2d');

    c.fillStyle = "#228B22";

    c.strokeStyle = "red";

    c.beginPath();
    c.moveTo(x1, y1);
    c.lineTo(x2, y2);
    c.stroke();
    c.lineTo(x3, y3);
    c.stroke();
    c.lineTo(x1, y1);
    c.stroke();

    c.fill();
}

//draws a grid with each square being 50px/50px
function drawGrid(canvas) {
    const c = canvas.getContext('2d');


    c.beginPath();
    for (let i = 1; i < 10; i++) {
        const x = 50 * i;
        c.moveTo(x, 0);
        c.lineTo(x, 200);
        c.stroke();

    }

    for (let i = 1; i < 4; i++) {
        const y = 50 * i;
        c.moveTo(0, y);
        c.lineTo(500, y);
        c.stroke();
    }
}

//draws the czech flag
function drawCzechFlag(canvas) {
    const c = canvas.getContext('2d');
//blue triangle part
    c.fillStyle = "blue";

    c.beginPath();
    c.moveTo(0, 0);
    c.lineTo(150, 110);
    c.stroke();
    c.lineTo(0, 220);
    c.stroke();
    c.lineTo(0, 0);
    c.stroke();

    c.fill();

//red rhombus part
    c.fillStyle = "red";
    c.strokeStyle = "white";
    c.beginPath();
    c.moveTo(150, 110);
    c.lineTo(320, 110);
    c.stroke();
    c.lineTo(320, 220);
    c.stroke();
    c.lineTo(0, 220);
    c.stroke();
    c.lineTo(150, 110);

    c.fill();

//white rhombus part
    c.fillStyle = "white";

    c.beginPath();
    c.moveTo(0, 0);
    c.lineTo(320, 0);
    c.stroke();
    c.lineTo(320, 110);
    c.stroke();
    c.lineTo(150, 110);
    c.stroke();
    c.lineTo(0, 0);

    c.fill();
}

//draw spartacus - draw the stick figure from above and make him carry sword.
function drawSpartacus(canvas) {
    const c = canvas.getContext('2d');
    drawStickFigure(canvas);
}

//draw a pair of eyes
function drawEyes(canvas) {
    const c = canvas.getContext('2d');
    let radius;

    let width = canvas.width;
    let height = canvas.height;

    if (width < height) {
        radius = width / 8;
    } else {
        radius = height / 8;
    }

    let leftX = width / 3;
    let leftY = height / 3;

    let rightX = (width / 3) * 2;
    let rightY = height / 3;

    circle(c, leftX, leftY, radius, "#fff");
    circle(c, rightX, rightY, radius, "#fff");

    circle(c, leftX, leftY, radius / 2, "#619EFF");
    circle(c, leftX, leftY, radius / 4, "#000000");

    circle(c, rightX, rightY, radius / 2, "#619EFF");
    circle(c, rightX, rightY, radius / 4, "#000000");

}

// draw a circle on canvas context `c`, centered on x,y, with radius r
// also fill the circle with white (so it's not transparent)
function circle(c, x, y, r, color) {
    c.beginPath()
    c.fillStyle = color;
    c.arc(x, y, r, 0, 6.3, false); // 6.3 is bigger than 2π so the arc will be a whole circle
    c.fill()
    c.stroke()
}

function drawSmiley(canvas) {
    const c = canvas.getContext('2d');
    let radius;

    let halfWidth = canvas.width / 2;
    let halfHeight = canvas.height / 2;

    if (halfWidth < halfHeight) {
        radius = halfWidth;
    } else {
        radius = halfHeight;
    }

    let xMiddle = canvas.width / 2;
    let yMiddle = canvas.height / 2;

    // decrease the smile size here
    const smileSize = 70; // size of smile in degrees of angle; 360 would be a full circle
    const startAngle = rad(90 - smileSize);
    const endAngle = rad(90 + smileSize);


    circle(c, xMiddle, yMiddle, radius, "#FEFF31");
    drawEyes(canvas);
    arc(c, xMiddle, yMiddle + 20, 20, startAngle, endAngle);
}

function arc(c, x, y, r, angleStart, angleEnd) {
    c.beginPath();
    c.arc(x, y, r, angleStart, angleEnd, false);
    c.stroke();
}

// convert from degrees to radians
function rad(x) {
    return x * Math.PI / 180;
}

function drawEmoji(canvas) {
    const c = canvas.getContext('2d');

    c.fillStyle = "#FFFFFF";
//top of neck
    c.beginPath();
    c.moveTo(20, 130);
    c.lineTo(100, 100);
    c.stroke();
//to ear tip
    c.lineTo(110, 80);
    c.stroke();
//front of ear
    c.lineTo(120, 100);
    c.stroke();

    c.lineTo(150, 140);
    c.stroke();

    c.lineTo(140, 150);
    c.stroke();

    c.lineTo(130, 150);
    c.stroke();

    c.lineTo(100, 130);
    c.stroke();

    //bottom neck
    c.lineTo(60, 150);
    c.stroke();

    c.lineTo(20, 130);
    c.stroke();

    c.fill();

    //mane
    c.fillStyle = "#FFC0CB";
    c.beginPath();
    c.moveTo(20, 130);
    c.lineTo(22, 135);
    c.stroke();

    c.lineTo(100, 110);
    c.stroke();

    c.lineTo(100, 100);
    c.stroke();

    c.lineTo(20, 130);
    c.stroke();

    c.fill();

    //horn
    c.fillStyle = "#FFC0CB";
    c.beginPath();
    c.moveTo(122, 105);
    c.lineTo(135, 90);
    c.stroke();

    c.lineTo(133, 112);
    c.stroke();

    c.fill();

    //eye
    c.beginPath();
    circle(c, 115, 110, 3, "#000000");
}
