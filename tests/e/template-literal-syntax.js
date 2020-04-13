/**
 * Tests for e module template literal syntax. E.g.
 *
 * e`div.class#id`(...)
 * */

const test = require('ava')
const { e, Reactor, Elemental } = require('../../dist/index.js')

test('e template literal – object and shape', (t) => {
	const element = e`div`

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

test('e template literals', (t) => {
	const element = e`div.foo#bar`

	if (element instanceof Elemental) {
		t.is(element.type, 'div')
		t.deepEqual(element.props.classes, ['foo'])
		t.is(element.props.id, 'bar')
		t.pass()
	} else {
		t.fail('element should be an instance of Elemental. Result: ' + element)
	}
})

test('e template literals - properties', (t) => {
	const element = e`div`({ prop: 'some value' })

	t.is(element.props.prop, 'some value')
})

test('e template literals - classes prop', (t) => {
	const withoutClasses = e`div`
	t.deepEqual(withoutClasses.props.classes, [])

	const withOneClass = e`div.foo`
	t.deepEqual(withOneClass.props.classes, ['foo'])

	const withTwoClasses = e`div.foo.bar`
	t.deepEqual(withTwoClasses.props.classes, ['foo', 'bar'])

	const withStringClassProp = e`div`({ classes: 'foo' })
	t.deepEqual(withStringClassProp.props.classes, ['foo'])
})

test('e template literals - children', (t) => {
	const withTextChild = e`div`('hello world')
	t.deepEqual(withTextChild.children, ['hello world'])

	const withTextChildren = e`div`('hello world', 'foo bar')
	t.deepEqual(withTextChildren.children, ['hello world', 'foo bar'])

	const child = e`p`('Hello world')
	const withNestedElemental = e`div`(child)
	t.deepEqual(withNestedElemental.children, [child])
})
