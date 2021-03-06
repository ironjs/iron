import deepmerge from './deepmerge.js'

// Factory function that returns a proxy object for e markup (eMarkupProxy)
function eMarkupProxyFactory(descriptions = []) {
	return new Proxy(new Function(), {
		get: (_, prop) => {
			// Super expiremental way of allowing e[componnentFunction] syntax
			/* BAD!
			if (prop.components && prop.components.length) {
				console.warn(`Warning! Using e[${prop}] syntax is expiremental.`)
				const component = prop.components.pop()
				return createComponent(component)
			}
			*/

			return eMarkupProxyFactory(descriptions.concat(prop))
		},
		apply: function (_, _1, options) {
			if (descriptions.length) {
				const description = descriptions.join('.')
				const { type, initialProps } = processDescription(description)
				const [props, children] = processOptions(options)

				return new Elemental(type, { ...initialProps, ...props }, children)
			} else if (
				options[0] instanceof Function &&
				!(options[0] instanceof Elemental)
			) {
				return createComponent(options[0])
			}

			return eTemplateTag(...options)
		},
	})
}

// Export an eMarkupProxy
export default eMarkupProxyFactory()

// A template literal tag to support e`div.class#id` syntax

function eTemplateTag(descriptions, ...params) {
	const description = descriptions.join('')
	const { type, initialProps } = processDescription(description)

	return new Elemental(type, initialProps)
}

// Class makes it easy to extend a Function object
class ExtensibleFunction extends Function {
	constructor(f) {
		return Object.setPrototypeOf(f, new.target.prototype)
	}
}

/* Elementals are simple object structures derived from e markup. */
export class Elemental extends ExtensibleFunction {
	constructor(type, props = {}, children = []) {
		super((...options) => this.extend(options))

		// Special classes prop should always be defined and as an array
		if (typeof props.classes === 'string') props.classes = [props.classes]
		else if (!props.classes) props.classes = []

		this.type = type
		this.props = props
		this.children = children
	}

	extend(options) {
		const [newProps, newChildren] = processOptions(options)

		const props = deepmerge(this.props, newProps)
		const children = [...this.children, ...newChildren]

		return new Elemental(this.type, props, children)
	}
}

function createComponent(componentFunction) {
	return (...options) => {
		const [props, children] = processOptions(options)

		return componentFunction(props, children)
	}
}

/* Takes options and returns [props, children].

Options are arguments for an e markup tag.
For example: e.div(...options) */
function processOptions(options) {
	let props = {}
	let children = []

	options.forEach((option) => {
		// Flatten array options
		if (Array.isArray(option)) {
			let [subprops, subchildren] = processOptions(option)
			children = children.concat(subchildren)
			props = { ...props, ...subprops }
		}
		// Properties
		// else if (typeof option === 'object' && state.isReactor(option)) {
		else if (isObjLiteral(option)) {
			props = { ...props, ...option }
		}
		// Children
		else {
			children.push(option)
		}
	})

	return [props, children]
}

/**
 * Descriptions are strings describing an element's type, class, and id.
 * This function returns a type string and initialProps object from a
 * provided description string.
 */
function processDescription(descripton) {
	let type
	let classes = []
	let id
	let initialProps = {}

	descripton.replace(/^([\w-|]+)/, (match, part) => {
		type = part
	})
	descripton.replace(/\.([\w-]+)/g, (match, part) => {
		classes.push(part)
	})
	descripton.replace(/#([\w-]+)/g, (match, part) => {
		id = part
	})

	if (id) {
		initialProps.id = id
	}
	if (classes) {
		initialProps.classes = classes
	}

	return { type, initialProps }
}

function isObjLiteral(_obj) {
	var _test = _obj
	return typeof _obj !== 'object' || _obj === null
		? false
		: (function () {
				while (!false) {
					if (
						Object.getPrototypeOf((_test = Object.getPrototypeOf(_test))) ===
						null
					) {
						break
					}
				}
				return Object.getPrototypeOf(_obj) === _test
		  })()
}
