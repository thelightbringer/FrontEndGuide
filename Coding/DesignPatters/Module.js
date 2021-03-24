const module = (function() {
    let counter = 0;
    return {
        increment: function() {
            return ++counter;
        },
        reset: function() {
            counter = 0;
        }
    }   
})()

// revealing Module say return anonymous object at the end return all private things you need to reveal

const revealingModule = (function() {
    let name = 'Demo';
    let age = 25;

    function setName(n) {
        name = n;
    }

    function greet() {
        return name + ' is ' + age + ' old.'
    }

    return {
        set: setName,
        get: greet
    }
})()
