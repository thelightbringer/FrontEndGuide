// Implement Promise.all
// Take array of promises
// Results Single promise that resolves to array of the result of input promises.

function promiseAll(promises) {
    const result = [];
    return new Promise((resolve, reject) => {
        promises.forEach(p => {
            if(!(p instanceof Promise)) {
                p = Promise.resolve(p)
            }
            p.then(data => {
                result.push(data);
                if(result.length === promises.length) {
                    resolve(result);
                }
            }).catch(e => reject(e));
        });
    })
}


// Implement Promise.anySettled
// Take array of promises
// Returns a promise that resolves after all of the given promises have either fulfilled or rejected, 
// with an array of objects that each describes the outcome of each promise.

function promiseAllSettled(promises) {
    const result = [];
    return new Promise((resolve, reject) => {
        promises.forEach(p => {
            if(!(p instanceof Promise)) {
                p = Promise.resolve(p)
            }
            p.then(data => {
                result.push({status: 'fulfilled', value: data});
            }).catch(e => {
                result.push({status: 'rejected', reason: e})
            })
            .finally(() => {
                resolve(result);
            })
        });
    })
}


// Implement Promise.any
// Take array of promises
// Settled as soon as any of the promises you feed it is fulfilled or they are all rejected, in which case it's rejected with an AggregateError 
function promiseAny(promises) {
    const result = [];

    return new Promise((resolve, reject) => {
        promises.forEach(p => {
            if(!(p instanceof Promise)) {
                p = Promise.resolve(p);
            }
            p.then(data => resolve(data));
        })
    })
}


// Implement Promise.any
// Take array of promises
// Settled as soon as any of the promises you feed it settle, whether they are fulfilled or rejected.
function promiseRace(promises) {
    
}

