function receivesAFunction (cb) {
    return cb()
}
receivesAFunction()

function returnsANamedFunction () {
    return function name () {
    }
}

function returnsAnAnonymousFunction () {
    return function () {
    }
}