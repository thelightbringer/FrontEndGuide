# UI Architecture

## React Design Patterns

* Atomic Development :

  * The five distinct levels of atomic design
        —  atoms > molecules > organisms > templates > pages
  * Atoms : Basic building blocks of matter, such as a button, input or a form label. They’re not useful on their own.
  * Molecules : Grouping atoms together, such as combining a button, input and form label to build functionality.
  * Organisms : Combining molecules together to form organisms that make up a distinct section of an interface (i.e. navigation bar)
  * Templates : Consisting mostly of groups of organisms to form a page — where clients can see a final design in place.
  * Pages : An ecosystem that views different template renders. We can create multiple ecosystems into a single environment.

* Container - View  Pattern

  * Container Component: is the entry point of the Feature/Screen. Responsibilities :
    * Data fetching
    * Redux integration
    * Side-effects handling, heavy computation or data mapping
    * Finally pass the required props down to the View.

  * View Component: should contain only the presentation part. Responsibilities
    * All the UI/presentation logic will reside here.
    * Further complex elements can be broken down into individual components for ease of maintenance.
    * Presentational components utilize props, render, and context.
    * Presentational components receive data and callbacks from props only, which can be provided by its container or parent component.

___

## REACT DESIGN PRINCIPLES

1. Stateless Component
2. Conditional Rendering
3. Render Props
4. Controlled Components
5. React Hooks

___

## Patterns I used in Application

1. Combination of Atomic design and Container View
2. _Composition Pattern_ – Separation of concern
3. _Observer Pattern (Pub Sub)_ – For intercomponent communication
4. _Data Down, Actions Up_ (props are dilled down, events are emitted up)
5. _Mediator Pattern_ For Redux-RxJS
6. _Mixin Pattern_ in React Hooks
7. _Decorator Pattern_ for render Props or HOC
8. _Façade Pattern_ for utility functions
9. _Adapter Pattern_ for new UI utilizing older APIs

___

## Stages of the System Development Life Cycle

1. Planning Stage. In any software development project, planning comes first.
2. Feasibility or Requirements Analysis Stage. ...
3. Design and Prototyping Stage. ...
4. Software Development Stage. ...
5. Software Testing Stage. ...
6. Implementation and Integration. ...
7. Operations and Maintenance.

___