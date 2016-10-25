"use strict";
QUnit.module("Basics");

QUnit.test("Change the id method in index.js to return your student ID.",
    function(assert) {
        assert.notEqual(
            id(),
            "UP000000",
            "The ID function should return your student ID."
        );
    }
);

QUnit.module("Canvas");



QUnit.test(

  "Create a function `showList` that takes two parameters: an element and a string that is a URL. The function will retrieve the URL with a synchronous request, parse the retrieved data as JSON; the data is guaranteed to be an array of string. The function will then, like the `filler` function in `ws_dom`, put the contents of the array as list items into the provided element.",

  function (assert) {

    assert.ok(
      typeof showList === "function",
      "Create a `showList` function."
    );

    assert.equal(
      window.list1.children.length,
      0,
      "Before running the function, the list is empty."
    );

    showList(window.list1, 'http://jacek.soc.port.ac.uk/tmp/ws/arr7');

    assert.equal(
      window.list1.children.length,
      7,
      "After retrieving wsarr1, there are 7 elements."
    );

    assert.equal(
      window.list1.children[5].textContent,
      "Return of the Jedi"
    );


    showList(window.list2, 'http://jacek.soc.port.ac.uk/tmp/ws/arr2');

    assert.equal(
      window.list2.children.length,
      2,
      "After retrieving wsarr2, there are 2 elements."
    );

    assert.equal(
      window.list2.children[1].textContent,
      "Leia"
    );

  }
);



QUnit.test(

  "Create a function `startShowingMessage` that takes two parameters: an element and a string that is a URL. The function will use `setInterval` to make the following task every 1s: retrieve the URL with an asynchronous request and put the response text into the text content of the provided element.",

  function (assert) {

    assert.ok(
      typeof startShowingMessage === "function",
      "Create a `startShowingMessage` function."
    );

    assert.equal(
      window.message.textContent,
      '',
      "Before running the function, the message is empty."
    );

    startShowingMessage(window.message, 'http://jacek.soc.port.ac.uk/tmp/ws/dyn1');

    var done = assert.async(2);

    setTimeout(checkMessage, 1500);
    setTimeout(checkMessage, 3000);

    var oldMessage = '';
    function checkMessage() {
      assert.notEqual(
        window.message.textContent,
        oldMessage,
        "The message should be changing."
      );
      oldMessage = window.message.textContent;
      done();
    }
  }
);



QUnit.test(

  "Create a function `drawSpartacus` that takes one parameter, a canvas element. The function will draw the stick figure Spartacus on the provided canvas. Make sure he wields a sword in his hand. For convenience, index.js contains a function `drawStickFigure` that does most of the job, given a canvas element.",

  function (assert) {
    assert.ok(
      typeof drawSpartacus === "function",
      "Create a `drawSpartacus` function."
    );

    drawSpartacus(window.canvas);

    assert.ok(
      true,
      "You need to check with your eyes whether Spartacus is drawn and has a sword."
    );

  }
);



QUnit.test(

  "get a simple array from server and draw circles to match",

  function (assert) {

  }
);



QUnit.test(

  "get data from a server and draw a chart with the data",

  function (assert) {

  }
);



QUnit.test(

  "parallel lines",

  function (assert) {

  }
);



QUnit.test(

  "grid",

  function (assert) {

  }
);



QUnit.test(

  "czech flag (challenge: union jack)",

  function (assert) {

  }
);



QUnit.test(

  "animate a simple bouncing box",

  function (assert) {

  }
);



QUnit.test(

  "seascape: sky, sea, sun, seagull, ship (challenge: animated)",

  function (assert) {

  }
);
