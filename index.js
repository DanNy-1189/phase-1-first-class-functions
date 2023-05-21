function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    return function name() {
        console.log();
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log();
    }
};

