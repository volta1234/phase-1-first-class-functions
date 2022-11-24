const { spy } = require("chai");

function receivesAFunction(callback) {
    const name = prompt("spy");
    callback(name);
}

function returnsANamedFunction() {
return function calc(x) { return x * 42; };
}

function returnsAnAnonymousFunction() {
    return function (message) {
        return `Hello`
    }
}
