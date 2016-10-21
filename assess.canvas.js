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
