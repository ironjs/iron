export default class ReactorCore {
	constructor(expression) {
		this._state = undefined
		this.expression = undefined
		this.descendants = []
		this.ancestors = []
		this.define(expression)
	}

	/**
	 * Trackers are a way of tracking ancestor reactors when invoking a reactors
	 * expression function.
	 *
	 * The trackers array is a stack of trackers. Each tracker is an array of
	 * reactors. When track() is invoked a reactor is pushed into the tracker at
	 * the top of the trackers stack.
	 *
	 * pushTracker and popTracker are called before and after a reactor's
	 * invocation respectively.
	 *
	 * track() is invoked whenever a reactor's state is retreived.
	 */
	static trackers = []
	static pushTracker() {
		this.trackers.push([])
	}
	static popTracker() {
		return this.trackers.pop()
	}
	static track(reactor) {
		if (ReactorCore.trackers.length) {
			this.trackers[this.trackers.length - 1].push(reactor)
		}
	}

	/**
	 * Getter/Setter methods that wrap retrieve and define respectively.
	 */

	get state() {
		return this.retrieve()
	}
	set state(expression) {
		this.define(expression)
		return this
	}

	/**
	 * Set the reactor's expression and updates the reactor initiating change
	 * propagation.
	 *
	 * @param  {any} expression – a value or function to keep internally for updates
	 * @return {undefined}
	 */
	define(expression) {
		this.expression = expression
		this.update()
	}

	/**
	 * Retreives the reactor's state while
	 * updating the trackers reactor set.
	 *
	 * @return {any} – The current state of the reactor.
	 */
	retrieve() {
		ReactorCore.track(this)

		return this._state
	}

	/**
	 * Updates the reactor's state by invoking it's internal expression
	 * while dynamically reorganizing the reactor in the graph.
	 *
	 * @return undefined
	 */
	update() {
		// Detach reactor from it's ancestors in the graph
		// by removing itself as a descendant for each of it's ancestors.
		this.ancestors.forEach(ancestor => ancestor.removeDescendant(this))

		// Add a new tracker to the trackers stack for this reactor
		ReactorCore.pushTracker()

		// Execute expression and update the internal state
		this._state =
			typeof this.expression === 'function'
				? this.expression()
				: this.expression

		// Set its ancestors to the latest tracker in the stack
		this.ancestors = ReactorCore.popTracker()

		// Invoke the each reactor's descendant update method.
		// This allows the change to propagate through the graph.
		if (this.descendants) {
			this.descendants.forEach(descendant => descendant.update())
		}

		// Attach reactor to the graph using the ancestors returned.
		// Effectively, re-attaching the updated symbol to the graph
		if (this.ancestors) {
			this.ancestors.forEach(ancestor => ancestor.addDescendant(this))
		}
	}

	/**
	 * Methods to add/remove descendants to the reactor instance.
	 * These methods guarantee no duplicates.
	 */

	addDescendant(reactor) {
		if (!this.descendants.includes(reactor)) {
			this.descendants.push(reactor)
		}
	}
	removeDescendant(reactor) {
		this.descendants = this.descendants.filter(
			descendant => descendant !== reactor
		)
	}
}
