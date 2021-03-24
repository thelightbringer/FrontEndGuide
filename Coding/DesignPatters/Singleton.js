const Singleton1 = (function() {
    let instance;
    function init() {
        return {
            name: 'abhijit',
            greet: function() {
                console.log('hello')
            }
        }
    }
    return {
        getInstance: function() {
            if(!instance) {
                instance = init();
            }
            return instance;
        }
    }
})();

// One with new keyword

const Singleton2 = (function() {
    let instance;
    return function() {
        if(new.target && !instance) {
            instance = {msg: 'hello'};
            console.log('Instantiated this time')
        } else {
            console.log('Not instantiated this time')
        }
            return instance;
    }
})()