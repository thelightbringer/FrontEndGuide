// Flat

function flat(arr) {
    const result = [];
    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            result.push(...arr[i]);
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

// Deep flat

function deepFlat(arr) {
    const result = [];
    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            result.push(...deepFlat(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

// Curry

function curry(fn) {
    return function curried(...args) {
        if(args.length >= fn.length) {
            return fn.apply(undefined, args)
        } else {
            return function(...args2) {
                return curried.apply(undefined, [...args, ...args2]);
            }
        }
    }
}

// Chunk [1,2,3,4],2 => [[1,2], [3,4]]

function chunk(arr, size) {
    const result =[];
    let tmp = [];
    for(let i=0; i < arr.length; i++) {
        if(i % size === 0) {
            tmp = [arr[i]];
            result.push(tmp)
        } else {
            tmp.push(arr[i]);
        }
    }
    return result;
}

// List of all the keys in an object [Not a lodash function]

function objKey(obj, prop) {
    const result = [];
    const keys = Object.keys(obj);
    for(let i=0; i < keys.length; i++) {
        let str = prop ? prop + '.' + keys[i] : keys[i];
        if(typeof obj[keys[i]] === 'object') {
            result.push(...objKey(obj[keys[i]], str));
        } else {
            result.push(str);
        }
    }
    return result;
}

// Throttling

const throttle = (func, limit) => {
    let inThrottle
    return function() {
      const args = arguments
      const context = this
      if (!inThrottle) {
        func.apply(context, args)
        inThrottle = true
        setTimeout(() => inThrottle = false, limit)
      }
    }
  }

//   This implementation ensures that we catch and execute that last invocation. 
//   We also invoke it at the correct time. We do this by creating a variable lastRan which is a timestamp of the last invocation. 
//   We can then use this to determine if the last invocation took place within the throttle limit. 
//   We can also use lastRan to determine whether the throttled function has ran at all. 
//   This makes the previous variable inThrottle redundant.
  const throttle2 = (func, limit) => {
    let lastFunc
    let lastRan
    return function() {
      const context = this
      const args = arguments
      if (!lastRan) {
        func.apply(context, args)
        lastRan = Date.now()
      } else {
        clearTimeout(lastFunc)
        lastFunc = setTimeout(function() {
          if ((Date.now() - lastRan) >= limit) {
            func.apply(context, args)
            lastRan = Date.now()
          }
        }, limit - (Date.now() - lastRan))
      }
    }
  }
//   throttleBtn.addEventListener('click', throttle(function() {
//     return console.log('Hey! It is', new Date().toUTCString());
//   }, 1000));


  //Debouncing

  const debounce = (func, delay) => {
    let inDebounce
    return function() {
      const context = this
      const args = arguments
      clearTimeout(inDebounce)
      inDebounce = setTimeout(() => func.apply(context, args), delay)
    }
  }

//   debounceBtn.addEventListener('click', debounce(function() {
//     console.info('Hey! It is', new Date().toUTCString());
//   }, 3000));