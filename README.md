<p>
	<a href="https://ironjs.org">
		<img alt="Modern Web Applications: IronJS" src="https://raw.githubusercontent.com/samholmes/ironjs/master/Banner.png">
	</a>
</p>


# What is Iron?

Iron is a JavaScript framework for modern web applications. It favors a performant runtime over a compiler.

# Features

* Plain JavaScript: No JSX or compiler
* JavaScript First: No HTML and no CSS
* Smart Runtime: No Virtual DOM
* Reactive State Management
* Markup as Data™

## Write in plain JavaScript

Iron doesn't force you to transpile or compile your application code. You can write standard JavaScript code; no JSX, TypeScript, or custom template file types.

## Smart Runtime

Iron provides a lightweight runtime that executes imperative changes to the DOM without the need for a Virtual DOM or complex reconciliation process. There is no "render cycle". The runtime renders once, and reacts to updates in the application's state.

## Reactive State

Iron empowers your state with Reactors, a declarative, reactive-programming pattern. Your state is a graph of variables bindings that data flows through. Your application automatically reacts to changes in your state as they occur.

## Markup as Data

Iron follows the paradigm that _markup is data_. This means your application structure (typically HTML markup) _and_ it's presentation (typically CSS markup) is simply data that lives in JavaScript. Separation of concerns is maintained not by separate languages, but by separate data.

# Documentation

Iron is a modern JavaScript framework. ES Modules are favored over CommonJS. There is ongoing work to decide on how this package will be distributed and included in your application. In the meantime, you can use JSDeliver to import Iron into your app.

`myapp/iron.js`
```js
export * from 'https://cdn.jsdelivr.net/gh/samholmes/iron/dist/index.js'
```

`myapp/app.js`
```js
import * as iron from './iron.js'

// your app code
```

Iron exports the following:

```js
import { Reactor, v, e, jarvis } from './iron.js'
```

Each utility will be described further in this documentation.

## Reactors

Your application is a bunch of state. Iron provides a way to handle state changes declaratively. It does this using Reactors.

Reactors are pieces of your application state.

```js
const myReactor = new Reactor(initialState)
```

You can update and retrieve the reactor state using it's `state` property.

```js
myReactor.state = 'new state'
console.log(myReactor.state)
```

Reactor's state can be a declarative function of other reactor's state.

```js
const myReactorCapsLock = new Reactor(() => myReactor.state.toUpperCase())
```

This binds `myReactorCapsLock` to `myReactor` and any updates to `myReactor` will propagate to `myReactorCapsLock` automatically. You can think of individual Reactors as nodes in a graph that is your application state.

Reactors can handle side-effects and don't need to be assigned to a variable.

```js
new Reactor(() => console.log(myReactorCapsLock.state))
```

## v: The Suit Utility

Iron provides a convenient utility for creating reactors:

```js
const myReactor = new Reactor(initialState)
// becomes
const myReactor = v(initialState)

myReactor.state = 'new state'
// becomes
myReactor.v = 'new state'
```

This dampens the verbosity of Iron-specific APIs in your application code and allows your code and logic to take forefront:

```js
const noun = v('world')
const message = v(() => `Hello ${noun}`)

v(() => console.log(message.v))

// Update the noun 1 second later
setTimeout(() => noun.v = 'Iron', 1000)
```

The suit utility has some built-in methods and it extends the Reactor class with a mutation API.

## e: Elementals

In an Iron app, everything is data; even your markup. Iron provides a way to create markup data called _Elementals_. You can create Elementals with the `e` utility.

```js
const myElemental = e.name.className(...propertiesOrContent)
```

Here's some examples:

```js
const heading = e.h1("Hello World")
const paragraph = e.p("Lorem Ipsum...")
const input = e.input({type: 'text'})
const container = e.div.container({style: {padding: '10px'}})

const page = container(heading, p, input)
```

Elementals are the primitive data type to represent your markup data. Composing Elementals creates a tree data structure to represent your application's structure.

```js
const App = e.container(
	e.header(e.h1("My App")),
	e.content(
		e.p("Lorem ipsum..."),
		// ...
	),
)
```

### Extending Elementals

Elementals can be re-invoked to their extend properties.

```js
const Button = e.button({ style: { background: 'black', color: 'white'}})
const RedButton = Button({style: {background: 'red'}})
```

## Jarvis

Iron provides a runtime to render your markup data.

```js
jarvis.render(ElementalOrReactor, rootElement)
```

Jarvis will render your root Elemental(s) **once** to the `rootElement` HTML element.

```js
jarvis.render(App, document.body)
```

### Jarvis + Reactors

Jarvis doesn't have a render cycle. Rather, Jarvis will recognize Reactors in your markup data to respond to changes and make the imperative DOM manipulations on your behalf.

```js
const count = v(0)

setInterval(() => count.v += 1, 1000)

const counter = e.p("Count: ", count)

jarvis.render(counter, document.body)
```

Reactors can be embedded in an Elemental's content and properties, and Jarvis will do the rest of the work for you to update your app's structure. This leads to a declarative programming style rather than a imperative one.

## License

[MIT](LICENSE)
