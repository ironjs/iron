/**
 * Tests the Elemental class
 */

const test = require('ava')
const { Elemental } = require('../../dist/index.js')

test('Elemental has the right shape', (t) => {
	const element = new Elemental('div')

	const shape = {
		type: element.type,
		props: element.props,
		children: element.children,
	}
	const expectedShape = { type: 'div', props: { classes: [] }, children: [] }

	t.deepEqual(shape, expectedShape)
})
