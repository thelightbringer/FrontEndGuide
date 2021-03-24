const subscribers = {};

function publish(eventName, data) {
    if(subscribers[eventName]) {
        subscribers[eventName].forEach(sub => sub.call(undefined, data));
    } else {
        console.log('Event not subscribed yet !!')
    }
}

function subscribe(eventName, callback) {
    if(Array.isArray(subscribers[eventName])) {
        subscribers[eventName].push(callback);
    } else {
        subscribers[eventName] = [callback];
    }
}

subscribe('GreetUser', () => console.log('Hello First Subscriber.'));

subscribe('GreetUser', () => console.log('Hello Second Subscriber'));

subscribe('GreetUser', () => console.log('Hello Third Subscriber.'));

publish('GreetUser');


// Mediator pattern is like observer pattern, but there is a separation of concern while handling the communication. In mediator everything is done centrally ensureing there is loose coupling in between communicating module.