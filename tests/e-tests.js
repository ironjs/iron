const test = require('ava')

/* Tests elemental.js module */

const { e, Reactor, Elemental } = require('../dist/index.js')

test('element object and shape', (t) => {
	const element = e.div()

	// element is an instance of Elemental
	t.true(element instanceof Elemental)

	// Test the element shape

	const shape = {
		type: element.type,
		props: element.props,
		children: element.children,
	}
	const expectedShape = { type: 'div', props: { classes: [] }, children: [] }

	t.deepEqual(shape, expectedShape)
})

// type

test('element type', (t) => {
	const { type } = e.div()
	t.true(type === 'div')
})

// children

test('children should always be an Array', (t) => {
	const { children } = e.div()
	t.true(Array.isArray(children))
})

test('text children', (t) => {
	const { children } = e.div('hello')
	t.deepEqual(children, ['hello'])
})

test('nested children', (t) => {
	const child = e.p('hello')
	const parent = e.div(child)

	t.is(parent.children[0], child)
})

test('array flattening children', (t) => {
	const children = [e.p('hello'), 'hello world']
	const parent = e.div(children)

	t.deepEqual(parent.children, children)
})

test('non-object literal children', (t) => {
	class ExtendedObject extends Object {}
	const child = new ExtendedObject()
	const parent = e.div(child)

	t.is(parent.children[0], child)
})

test('Reactor as children', (t) => {
	const child = new Reactor(23)
	const parent = e.div(child)

	t.is(parent.children[0], child)
})

// props

test('props object', (t) => {
	const { props } = e.div({ foo: 'bar', baz: 23 })

	// Is an object
	t.true(typeof props === 'object')

	// Test shape
	const expectedShape = { foo: 'bar', baz: 23, classes: [] }
	t.deepEqual(props, expectedShape)
})

test('props should always be an object', (t) => {
	const { props } = e.div()
	t.true(typeof props === 'object')
})

test('Reactor as a prop', (t) => {
	const prop = new Reactor('foo')
	const parent = e.div({ prop })

	t.is(parent.props.prop, prop)
})

test('Reactor as a classes or id prop', (t) => {
	const classes = new Reactor('foo')
	const id = new Reactor('foo')
	const parent = e.div({ classes, id })

	t.is(parent.props.classes, classes)
	t.is(parent.props.id, id)
})

// props.classes

test('props.classes should an Array', (t) => {
	const {
		props: { classes },
	} = e.div()

	t.true(Array.isArray(classes))
})

test('single class in props.classes', (t) => {
	const {
		props: { classes },
	} = e.div.foo()

	t.deepEqual(classes, ['foo'])
})

test('multiple classes in props.classes', (t) => {
	const {
		props: { classes },
	} = e.div.foo.bar()

	t.deepEqual(classes, ['foo', 'bar'])
})

test('single class defined as props', (t) => {
	const {
		props: { classes },
	} = e.div({ classes: 'foo' })

	// Is array
	t.true(Array.isArray(classes))

	// Is the right array
	t.deepEqual(classes, ['foo'])
})

test('multiple classes defined as props', (t) => {
	const {
		props: { classes },
	} = e.div({ classes: ['foo', 'bar'] })

	// Is array
	t.true(Array.isArray(classes))

	// Is the right array
	t.deepEqual(classes, ['foo', 'bar'])
})

// Component Functions

test('component functions', (t) => {
	const ComponentFunction = (props, children) => {
		return [props, children]
	}

	const component = e(ComponentFunction)

	const props = { foo: 'bar' }
	const children = ['hello']

	t.deepEqual(component(props, children), [props, children])
})
