import Reactor from './Reactor.js'

export default function suit(expression) {
	return new Reactor(expression)
}

suit.fromEvent = function fromEvent(obj, eventName, defaultValue) {
	const event = suit(defaultValue)

	obj.addEventListener(eventName, ev => {
		// console.log(ev)
		event.state = ev
	})

	return event
}

suit.wrap = function wrap(reactor) {
	return suit(() =>
		reactor.state instanceof Reactor ? reactor.state.state : undefined
	)
}

suit.log = function log(...reactors) {
	return suit(() =>
		reactors.forEach(reactor => {
			if (reactor instanceof Reactor) console.log(reactor.state)
			else console.log(reactor)
		})
	)
}
