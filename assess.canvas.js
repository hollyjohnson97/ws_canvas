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

    // todo assert some content

    showList(window.list1, 'http://jacek.soc.port.ac.uk/tmp/ws/arr2');

    assert.equal(
      window.list1.children.length,
      2,
      "After retrieving wsarr2, there are 2 elements."
    );

    // todo assert check some content
  }
);



QUnit.test(

  "get a simple array from server and put it in a list, updating it every second using setTimeout",

  function (assert) {

  }
);



QUnit.test(

  "give a sword to Spartacus, using the stick figure code from portsoc/Web-Canvas-Stick-Figures",

  function (assert) {

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
