# Topics

- Array Methods
  - forEach
  - map
  - filter
  - some
  - every
  - reduce
  - concat
  - reduceRight
  - slice
  - splice
  - flatMap

- JS Polyfills
  - flat
  - curry
  - chunk
  - All keys of object
  - Operation based on function invocation
  - Throttle
  - Debounce

- Patterns
  - Singleton
  - Prototype
  - Modular
  - [Revealing Modular](https://stackoverflow.com/a/22918556/7784692)
  - Observer
  - Facade
  - Mixin
  - Mediator
  - Composition
  - Decorator
  - Flyweight
  - Chain of Resposibility
  - Proxy

- Javascript

  - Inheritance (Prototypical -> object linking || Classical -> Limited to classes derived from other classes)
    - [Object creation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#different_ways_to_create_objects_and_the_resulting_prototype_chain)
    - Object.create vs Object.setPrototypeOf(a,b) -> create is faster

  - [this](https://www.freecodecamp.org/news/a-guide-to-this-in-javascript-e3b9daef4df1/)
    - bind, call, apply, arrow functions

  - Closure
  
  - Generators ?

  - For..of in Object

  - [Run times - Set, Map, WeakSet, WeakMap -- Ordered HashTable](https://adrianmejia.com/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial)

  - Accessibility
    - ARIA tags
    - Semantic Tags

  - Security
    - XSS attacks
    - CSRF
    - DoS and DDos
    - Clickjacking
    - Man in the middle

  - DOM traversal using javascript
    - Traversing downwards
      - element.querySelector
      - element.querySelectorAll
      - element.children
  
    - Traversing upwards
      - element.parentElement
      - element.closest
  
    - Traversing sideways
      - element.nextElementSibling
      - element.previousElementSibling
      - Combine parentElement, children, and index
  
  - [Critical Rendering Path - DOM, CSSOM, Render Tree, Layout, Paint](https://medium.com/@luisvieira_gmr/understanding-the-critical-rendering-path-rendering-pages-in-1-second-735c6e45b47a)

  - [Resource Hinting - DNS prefetch, preconnecting, prefetch, preload, pre render](https://www.smashingmagazine.com/2019/04/optimization-performance-resource-hints/)

  - [SOLID](https://medium.com/@cramirez92/s-o-l-i-d-the-first-5-priciples-of-object-oriented-design-with-javascript-790f6ac9b9fa)
    [Link2](https://thefullstack.xyz/solid-javascript/)

  -

- React
  - Refs
  - HOCs
  - renderProp
  - Hooks - Custom Hook
  - Lifecycle
    - Mounting
      - constructor
      - getDerivedStateFromProp
      - Render
      - ComponentDidMount

    - Updating
      - getDerivedStateFromProp
      - shouldComponentUpdate
      - Render
      - getSnapshotBeforeUpdate
      - ComponentDidUpdate

    - Unmounting
      - ComponentDidUnmount

    - Error Handling
      - static getDerivedStateFromError
      - componentDidCatch
  - Mock lifecycle with functional
  - React.Memo
  - useMemo vs useCallback - Done
  - useEffect vs useLayoutEffect (useLayoutEffect is fired after dom mutation and before painiting. useEffect is fired after painting.)
  - componentWillReceiveProp -> useMemo at top || useState with initial value as function

- Optimize React Application
  - Avoid reconcilliation
  - Virtualize long list (window)
  - Avoid dangerously set innerHTML
  - Defer rendering of major components
  - Web workers
  - Caching strategies
  - Dependency optimization
  - Code splitting/ Bundling
  - Caching vendor scripts
  - Lazy loading
  - Dependency modification
  - Throttling debouncing
  - Use Fragments to avoid extra dom elements
  - CDN
