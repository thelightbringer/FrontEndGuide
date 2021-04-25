# React Application Optimization

## Tools for checking performance

* __React Profiler__ : It provides 4 types of chart views for performance data.
  * Flame Chart
  * Ranked Chart
  * Interaction Chart
  * Component Chart
  
  [Link](https://blog.bitsrc.io/profiling-performance-of-react-apps-using-react-profiler-d02d77f3c96a)
  
* __Chrome Lighthouse__ : Lighthouse is an open-source, automated tool for improving the quality of web pages. You can run it against any web page, public or requiring authentication. It has audits for performance, accessibility, progressive web apps, SEO and more.
    [Link](https://developers.google.com/web/tools/lighthouse/?authuser=1)

* __Profiler__ : [Link](https://developer.chrome.com/docs/devtools/evaluate-performance/)

---

## Techniques

* __Virtualize Long Lists__ :
  * Use 'windowing'
  * Renders a small subset of your rows at any given time
  * Libraries - [React-window](https://react-window.now.sh/) or [React-virtualized](https://bvaughn.github.io/react-virtualized/)

* __Avoid Reconciliation__ :
  * Use _shouldComponentUpdate_ or _React.memo(MyComponent, areEqual);_ [Link](https://dmitripavlutin.com/use-react-memo-wisely/)
  * _React.PureComponent_
  * _useMemo_
  * _useCallback_

* __Avoid dangerouslySetInnerHTML__ : Not only is it discouraged to use _dangerouslySetInnerHTML_, but it turns out that it’s actually a source of slowness when mounting and rendering.

* __Defer Rendering When Mounting & Unmounting Many Components__ : It turns out that mounting and unmounting large trees of components (like timelines of Tweets) is very expensive in React. [Link](https://gist.githubusercontent.com/paularmstrong/cc2ead7e2a0dec37d8b2096fc8d85759/raw/1ce769bb5c27c8ede2dfff11ab20745bc12ce34d/deferComponentRender.js)

* __Web worker__ : JS code runs on a single thread. Running a long process on the same thread will seriously affect the UI-rendering code, so the best bet is to move the process to another thread. This is done by Web workers. They are the gateway where we can create a thread and run it parallel to the main thread without hampering the UI-flow.

* __Lazy loading__ : use _React.lazy()_ API. It lets u render a dynamic import as a regular component. EX : _const MyComponent = React.lazy(()=>{import('./MyComponent.js')})._ The callback function of the React.lazy returns a Promise via the import() call. The Promise resolves if the module loads successfully and rejects if there was an error in loading the module, due to network failure, wrong path resolution, no file found, etc.

* __Multiple Chunk Files__ : You can consider having two separate files by separating your vendor, or third-party library code from your application code by taking advantage of CommonsChunkPlugin for webpack. You’ll end up with vendor.bundle.js and app.bundle.js. By splitting your files, your browser caches less frequently and parallel downloads resources to reduce load time wait.

* __Dependency optimization__ : Let’s say you are only using 20 of the 100+ methods of _lodash_, then having all the extra methods in your final bundle is not optimal. So for this, you can use lodash-webpack-plugin to remove unused functions.

* __Use React.Fragments to Avoid Additional HTML Element Wrappers__

* __Avoid Inline Function Definition in the Render Function.__ : Since functions are objects in JavaScript ({} !== {}), the inline function will always fail the prop diff when React does a diff check. Also, an arrow function will create a new instance of the function on each render if it's used in a JSX property. This might create a lot of work for the garbage collector.

* __Throttling and Debouncing Event Action in JavaScript__ : For example, an XHR request or DOM manipulation that performs UI updates, processes a large amount of data, or perform computation expensive tasks. In these cases, throttling and debouncing techniques can be a savior without making any changes in the event listener.

* __CDN (Content Delivery Network)__ : The CDN server closest to a user is known as an “edge server”. When the user requests content from your website, which is served through a CDN, they are connected to edge server and are ensured the best online experience possible.

* __Analyzing and Optimizing Your Webpack Bundle Bloat__ : Before production deployment, you should check and analyze your application bundle to remove the plugins or modules that aren’t needed. You can consider using Webpack Bundle Analyzer, which allows you to visualize the size of webpack output files with an interactive zoomable treemap. This module will help you:
  * Realize what's really inside your bundle
  * Find out what modules take up the most size
  * Find modules that got there by mistake
  * Optimize it!

* __Consider Server-side Rendering__ : Server-side rendering provides performance benefit and consistent SEO performance.

* __Enable Gzip Compression on Web Server__ : Gzip compression allows the web server to provide a smaller file size, which means your website loads faster. The reason gzip works so well is because JavaScript, CSS, and HTML files use a lot of repeated text with lots of whitespace. Since gzip compresses common strings, this can reduce the size of pages and style sheets by up to 70%, shortening your website’s first render time.

---

## Things to avoid

* __Using Immutable Data Structures__ : For handling changes to state or props in React components, we can consider the following immutable approaches:
  * For arrays: use [].concat or es6 [ ...params]
  * For objects: use Object.assign({}, ...) or es6 {...params}
  <p>React setState method is asynchronous. This means that rather than immediately mutating this.state, setState() creates a pending state transition. If you access this.state after calling this method, it would potentially return the existing value. To prevent this, use the callback function of setState to run code after the call is completed.</p>

* __Avoid using Index as Key for map__ : Using the key as the index can show your app incorrect data as it is being used to identify DOM elements. When you push or remove an item from the list, if the key is the same as before, React assumes that the DOM element represents the same component.

* __Avoiding Props in Initial States__ : Using props to initialize a state in constructor function often leads to duplication of “source of truth”, i.e. where the real data is. This is because constructor function is only invoked when the component is first created. To set the state based on prop we can :
  * Don't initialize state with props which can be changed later. Instead, use props directly in the component.
  * You can use _componentWillReceiveProps_ to update the state when props change. useMemo <code> useMemo(() => {
     // componentWillReceiveProps
   },[...props]);</code>

* __Avoid Spreading props on DOM elements__ : Avoid spreading properties into a DOM element as it adds unknown HTML attribute, which is unnecessary and a bad practice.

* __Avoid Async Initialization in componentWillMount()__ : Use _componentDidMount_. componentWillMount() is only called once and before the initial render. Since this method is called before render(), our component will not have access to the refs and DOM element.

---

## Best Practices

* Keep components small and function-specific
* Reusability is important, so keep creation of new components to the minimum required.
* Consolidate duplicate code – DRY your code. Don’t Repeat Yourself (DRY).
* Comment only where necessary.
* Name the component after the function.
* All files related to any one component should be in a single folder.
* Write tests for all code
* Follow linting rules, break up lines that are too long

___

## VS Libraries

* ESLint
* Reactjs code snippets / ES7 React/Redux/GraphQL/React-Native snippets
* Turbo Console log
* Beautify
* Debugger for chrome

___
