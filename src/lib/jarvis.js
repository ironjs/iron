import suit from './suit.js'
import Reactor from './Reactor.js'
import { Elemental } from './elemental.js'

export function render(model, rootElement) {
	model = Array.isArray(model) ? model : [model]

	model.map((model, index) => {
		handleChild(rootElement, model)
	})
}

function createElement({ type: elementName, props, children }) {
	// Unsafe text node elements
	if (elementName === '_unsafe') {
		return createUnsafeTextNode(children)
	}
	// Normal DOM elements
	else {
		let element = document.createElement(elementName)

		Object.entries(props).forEach(([propName, propValue]) =>
			handleProp(element, propName, propValue)
		)

		children.forEach((child) => {
			handleChild(element, child)
		})

		if (props.ref && props.ref instanceof Reactor) {
			// Hacky way of making sure the element has been mounted to the DOM
			// before updating ref
			setTimeout(() => {
				props.ref.state = element
			}, 0)
		}

		return element
	}
}

function handleProp(el, propName, propValue) {
	if (propValue instanceof Reactor) {
		suit(() => {
			handleProp(el, propName, propValue.state)
		})
	} else if (typeof propValue === 'function') {
		el.addEventListener(propName, propValue)
	} else if (typeof propValue === 'object' && propName === 'style') {
		handleStyles(el, propValue)
	} else {
		updateElementProperty(el, propName, propValue)
	}
}

function updateElementProperty(el, propName, propValue) {
	// ignored props
	if (['children', 'ref'].includes(propName)) return

	// classes prop
	if (propName === 'classes') {
		if (propValue.length) el.className = propValue.join(' ')
	}
	// attribute props
	else {
		// Boolean attribute
		if (typeof propValue === 'boolean') {
			if (propValue) {
				setAttribute(el, propName, propValue)
			} else {
				removeAttribute(el, propName, propValue)
			}
		}
		// Default attribute
		else {
			setAttribute(el, propName, propValue)
		}
	}
}

function setAttribute(el, name, value) {
	if (el[name]) {
		el[name] = value
	}
	el.setAttribute(name, value)
}
function removeAttribute(el, name) {
	if (el[name]) {
		delete el[name]
	}
	el.removeAttribute(name)
}

function handleChild(element, child, index) {
	index = index || element.childNodes.length
	child = child instanceof Elemental ? createElement(child) : child

	if (child instanceof Reactor) {
		let childStartIndex = element.childNodes.length
		let childrenCount = 0

		// Bind reactor to DOM
		suit(() => {
			const children = Array.isArray(child.state) ? child.state : [child.state]
			// Remove all old child nodes
			while (childrenCount) {
				childrenCount -= 1
				const oldChild = element.childNodes[childStartIndex + childrenCount]
				if (oldChild) element.removeChild(oldChild)
			}

			// Add new child nodes
			children.forEach((child, index) => {
				handleChild(element, child, childStartIndex + index)
				++childrenCount
			})
		})

		// Utilize mutation API for efficient updates to the DOM
		suit(() => {
			const { type, key, value } = child.mutation.state

			if (type === 'push') {
				handleChild(element, value, childStartIndex + key)
				++childrenCount
			}
			if (type === 'pull') {
				const oldChild = element.childNodes[childStartIndex + key]
				if (oldChild) element.removeChild(oldChild)
				--childrenCount
			}
			if (type === 'put') {
				const oldChild = element.childNodes[childStartIndex + key]
				if (oldChild) element.removeChild(oldChild)
				handleChild(element, value, childStartIndex + key)
			}
		})
	}
	// Append child normally
	else if (typeof child !== 'undefined') {
		insertChildNodeInParentAt(childSafety(child), element, index)
	}
}

function handleStyles(el, styles) {
	Object.entries(styles).forEach(([styleProp, styleValue]) => {
		if (styleValue instanceof Reactor) {
			suit(() => (el.style[styleProp] = styleValue.state))
		} else {
			el.style[styleProp] = styleValue
		}
	})
}

function createTextNode(texts) {
	const el = document.createTextNode('')

	if (!Array.isArray(texts)) {
		texts = [texts]
	}

	// HTML Entities

	if (texts.some((text) => text instanceof Reactor)) {
		suit(
			() =>
				(el.textContent = texts
					.map((text) => (text instanceof Reactor ? text.state : text))
					.join(''))
		)
	} else {
		el.textContent = texts.join('')
	}

	return el
}

function decodeHTMLEntities(html) {
	var txt = document.createElement('textarea')
	txt.innerHTML = html
	return txt.value
}

function createUnsafeTextNode(texts) {
	return createTextNode(texts.map((text) => decodeHTMLEntities(text)))
}

// Inserts a child DOM node at a specific index
function insertChildNodeInParentAt(child, parent, index = null) {
	if (index === null || index >= parent.childNodes.length) {
		return parent.appendChild(child)
	} else {
		let referenceNode = parent.childNodes[Math.max(0, index)]
		return parent.insertBefore(child, referenceNode)
	}
}

// Boolean Functions

function isDOM(obj) {
	try {
		//Using W3 DOM2 (works for FF, Opera and Chrome)
		return obj instanceof HTMLElement || obj instanceof Text
	} catch (e) {
		//Browsers not supporting W3 DOM2 don't have HTMLElement and
		//an exception is thrown and we end up here. Testing some
		//properties that all elements have (works on IE7)
		return (
			typeof obj === 'object' &&
			obj.nodeType === 1 &&
			typeof obj.style === 'object' &&
			typeof obj.ownerDocument === 'object'
		)
	}
}

/* Returns something that is safe to append to a parent DOM node*/
function childSafety(child) {
	if (isDOM(child)) {
		return child
	} else if (typeof child === 'string' || typeof child === 'number') {
		return createTextNode(child)
	} else {
		throw new Error(`Unknown child type ${typeof child}`)
	}
}
