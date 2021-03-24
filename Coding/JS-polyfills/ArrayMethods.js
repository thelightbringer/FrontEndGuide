// Array polyfills

// 1- map
Array.prototype.myMap = function(fn) {
    const result = [];
    for(let i=0; i < this.length; i++) {
        result.push(fn.call(undefined, this[i], i, this));
    }
    return result;
}

// 2- forEach
Array.prototype.myForEach = function(fn) {
    for(let i=0; i < this.length; i++) {
        fn.call(undefined, this[i], i, this);
    }
}

// 3 - filter
Array.prototype.myFilter = function(fn) {
    const result = [];
    for(let i=0; i < this.length; i++) {
        if(fn.call(undefined, this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
}

// 4 - reduce
Array.prototype.myReduce = function(fn, init) {
    let acc = init;
    for(let i=0; i < this.length; i++) {
        if(acc) {
            acc = fn.call(undefined, acc, this[i], i, this);
        } else {
            acc = this[i];
        }
    }
    return acc;
}

// 5 - every
Array.prototype.myEvery = function(fn) {
    let result = true;
    for(let i=0; i < this.length; i++) {
        if(fn.call(undefined, this[i], i, this) === false) {
            result = false;
            break;
        }
    }
    return result;
}

// 6 - some
Array.prototype.mySome = function(fn) {
    let result = false;
    for(let i=0; i < this.length; i++) {
        if(fn.call(undefined, this[i], i, this) === true) {
            result = true;
            break;
        }
    }
    return result;
}
