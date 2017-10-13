"use strict";
QUnit.module("Canvas");

QUnit.test(

  "Create a `drawLines` function which accepts a single parameter, a canvas element, where it will draw two parallel lines. The first line should begin at a point 100 pixels to the right of, the origin (i.e. 0,0) and 100 pixels below it. It should be 400 pixels long. The second line should run parallel to the first line, exactly 100 pixels below it. It should start at a point 100 pixels from the edge of the canvas and be 200 pixels long.",

  function (assert) {
    assert.ok(
      typeof drawLines === "function",
      "Create a `drawLines` function."
    );

    drawLines(window.canvas4);

    assert.ok(
      true,
      "You need to check with your eyes that the lines match the picture opposite."
    );

    window.canvas4.parentElement.classList.add("done");
  }
);




QUnit.test(

  "Create a function `drawTriangle` that takes seven parameters: a canvas element, and x1, y1, x2, y2, x3, y3. The function draws a red triangle, filled solid with green, between the three points given by the parameters.",

  function (assert) {
    assert.ok(
      typeof drawTriangle === "function",
      "Create a `drawTriangle` function."
    );

    drawTriangle(window.canvas2, 10, 10, 10, 100, 100, 10);
    drawTriangle(window.canvas2, 30, 30, 30, 100, 100, 30);
    drawTriangle(window.canvas2, 190, 190, 190, 100, 100, 190);

    assert.ok(
      true,
      "You need to check with your eyes that there are three triangles like in the attached picture."
    );

    window.canvas2.parentElement.parentElement.classList.add("done");
  }
);


QUnit.test(

  "Write a drawGrid function that fills the canvas with a grid to make squares 50px big.",

  function (assert) {
    assert.ok(
      typeof drawGrid === "function",
      "Create a `drawGrid` function."
    );

    drawGrid(window.canvas5);

    assert.ok(
      true,
      "You need to check with your eyes that you have in fact made a grid."
    );

    window.canvas5.parentElement.classList.add("done");
  }
);

QUnit.test(

  "Write a drawCzechFlag function to draw the Czech flag.",

  function (assert) {
    assert.ok(
      typeof drawCzechFlag === "function",
      "Create a `drawCzechFlag` function."
    );

    drawCzechFlag(window.canvas6);

    assert.ok(
      true,
      "You need to check with your eyes that you have in fact made the Czech flag."
    );

    window.canvas6.parentElement.classList.add("done");
  }
);



QUnit.test(

  "Create a function `drawSpartacus` that takes one parameter, a canvas element. The function will draw the stick figure Spartacus on the provided canvas. Make sure he wields a sword in his hand. For convenience, index.js contains a function `drawStickFigure` that does most of the job, given a canvas element. Challenge: make him walk around.",

  function (assert) {
    assert.ok(
      typeof drawSpartacus === "function",
      "Create a `drawSpartacus` function."
    );

    drawSpartacus(window.canvas);

    assert.ok(
      true,
      "You need to check with your eyes whether you see Spartacus with a sword."
    );

    window.canvas.parentElement.classList.add("done");
  }
);
