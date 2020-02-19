function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var ReactorCore =
/*#__PURE__*/
function () {
  function ReactorCore(expression) {
    _classCallCheck(this, ReactorCore);

    this._state = undefined;
    this.expression = undefined;
    this.descendants = [];
    this.ancestors = [];
    this.define(expression);
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


  _createClass(ReactorCore, [{
    key: "define",

    /**
     * Set the reactor's expression and updates the reactor initiating change
     * propagation.
     *
     * @param  {any} expression – a value or function to keep internally for updates
     * @return {undefined}
     */
    value: function define(expression) {
      this.expression = expression;
      this.update();
    }
    /**
     * Retreives the reactor's state while
     * updating the trackers reactor set.
     *
     * @return {any} – The current state of the reactor.
     */

  }, {
    key: "retrieve",
    value: function retrieve() {
      ReactorCore.track(this);
      return this._state;
    }
    /**
     * Updates the reactor's state by invoking it's internal expression
     * while dynamically reorganizing the reactor in the graph.
     *
     * @return undefined
     */

  }, {
    key: "update",
    value: function update() {
      var _this = this;

      // Detach reactor from it's ancestors in the graph
      // by removing itself as a descendant for each of it's ancestors.
      this.ancestors.forEach(function (ancestor) {
        return ancestor.removeDescendant(_this);
      }); // Add a new tracker to the trackers stack for this reactor

      ReactorCore.pushTracker(); // Execute expression and update the internal state

      this._state = typeof this.expression === 'function' ? this.expression() : this.expression; // Set its ancestors to the latest tracker in the stack

      this.ancestors = ReactorCore.popTracker(); // Invoke the each reactor's descendant update method.
      // This allows the change to propagate through the graph.

      if (this.descendants) {
        this.descendants.forEach(function (descendant) {
          return descendant.update();
        });
      } // Attach reactor to the graph using the ancestors returned.
      // Effectively, re-attaching the updated symbol to the graph


      if (this.ancestors) {
        this.ancestors.forEach(function (ancestor) {
          return ancestor.addDescendant(_this);
        });
      }
    }
    /**
     * Methods to add/remove descendants to the reactor instance.
     * These methods guarantee no duplicates.
     */

  }, {
    key: "addDescendant",
    value: function addDescendant(reactor) {
      if (!this.descendants.includes(reactor)) {
        this.descendants.push(reactor);
      }
    }
  }, {
    key: "removeDescendant",
    value: function removeDescendant(reactor) {
      this.descendants = this.descendants.filter(function (descendant) {
        return descendant !== reactor;
      });
    }
  }, {
    key: "state",

    /**
     * Getter/Setter methods that wrap retrieve and define respectively.
     */
    get: function get() {
      return this.retrieve();
    },
    set: function set(expression) {
      this.define(expression);
      return this;
    }
  }], [{
    key: "pushTracker",
    value: function pushTracker() {
      this.trackers.push([]);
    }
  }, {
    key: "popTracker",
    value: function popTracker() {
      return this.trackers.pop();
    }
  }, {
    key: "track",
    value: function track(reactor) {
      if (ReactorCore.trackers.length) {
        this.trackers[this.trackers.length - 1].push(reactor);
      }
    }
  }]);

  return ReactorCore;
}();

_defineProperty(ReactorCore, "trackers", []);

var Reactor =
/*#__PURE__*/
function (_ReactorCore) {
  _inherits(Reactor, _ReactorCore);

  function Reactor(expression) {
    var _this;

    _classCallCheck(this, Reactor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Reactor).call(this, expression));
    _this.mutation = new ReactorCore({});
    return _this;
  }

  _createClass(Reactor, [{
    key: "push",
    value: function push(value) {
      var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
      var index = keyToIndex(key, this._state.length + 1);

      if (typeof index === 'number') {
        this._state.splice(index, 0, value);
      } else {
        this._state[index] = value;
      }

      this.mutation.state = {
        type: 'push',
        value: value,
        key: index
      };
    }
  }, {
    key: "pull",
    value: function pull() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
      var index = keyToIndex(key, this._state.length);

      if (typeof index === 'number') {
        this._state.splice(index, 1);
      } else {
        delete this._state[index];
      }

      this.mutation.state = {
        type: 'pull',
        key: index
      };
    }
  }, {
    key: "put",
    value: function put(value) {
      var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
      var index = keyToIndex(key, this._state.length);

      if (typeof index === 'number') {
        this._state.splice(index, 1, value);
      } else {
        delete this._state[index];
      }

      this.mutation.state = {
        type: 'put',
        value: value,
        key: index
      };
    }
  }, {
    key: "map",
    value: function map(fn) {
      var _this2 = this;

      var mappedReactor = new Reactor(function () {
        return _this2.state.map(fn);
      });
      new ReactorCore(function () {
        var _this2$mutation$state = _this2.mutation.state,
            type = _this2$mutation$state.type,
            key = _this2$mutation$state.key,
            value = _this2$mutation$state.value;

        if (type === 'push') {
          mappedReactor.push(fn(value, key), key);
        }

        if (type === 'pull') {
          mappedReactor.pull(key);
        }

        if (type === 'put') {
          mappedReactor.put(fn(value, key), key);
        }
      });
      return mappedReactor;
    }
  }, {
    key: "v",
    get: function get() {
      return this.state;
    },
    set: function set(value) {
      this.state = value;
    }
  }, {
    key: "_v",
    get: function get() {
      return this._state;
    },
    set: function set(value) {
      this.state = value;
    }
  }]);

  return Reactor;
}(ReactorCore);

function keyToIndex(key, length) {
  if (typeof key === 'number' && typeof length !== 'undefined') {
    return key < 0 ? Math.max(0, length + key) : key;
  } else {
    return key;
  }
}

function suit(expression) {
  return new Reactor(expression);
}

suit.fromEvent = function fromEvent(obj, eventName, defaultValue) {
  var event = suit(defaultValue);
  obj.addEventListener(eventName, function (ev) {
    // console.log(ev)
    event.state = ev;
  });
  return event;
};

suit.wrap = function wrap(reactor) {
  return suit(function () {
    return reactor.state instanceof Reactor ? reactor.state.state : undefined;
  });
};

suit.log = function log() {
  for (var _len = arguments.length, reactors = new Array(_len), _key = 0; _key < _len; _key++) {
    reactors[_key] = arguments[_key];
  }

  return suit(function () {
    return reactors.forEach(function (reactor) {
      if (reactor instanceof Reactor) console.log(reactor.state);else console.log(reactor);
    });
  });
};

var isMergeableObject = function isMergeableObject(value) {
  return isNonNullObject(value) && !isSpecial(value);
};

function isNonNullObject(value) {
  return !!value && _typeof(value) === 'object';
}

function isSpecial(value) {
  var stringValue = Object.prototype.toString.call(value);
  return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value) || isReactor(value);
} // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25


var canUseSymbol = typeof Symbol === 'function' && Symbol["for"];
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol["for"]('react.element') : 0xeac7;

function isReactElement(value) {
  return value.$$typeof === REACT_ELEMENT_TYPE;
}

function isReactor(value) {
  return value instanceof Reactor;
}

function emptyTarget(val) {
  return Array.isArray(val) ? [] : {};
}

function cloneUnlessOtherwiseSpecified(value, options) {
  return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}

function defaultArrayMerge(target, source, options) {
  return target.concat(source).map(function (element) {
    return cloneUnlessOtherwiseSpecified(element, options);
  });
}

function getMergeFunction(key, options) {
  if (!options.customMerge) {
    return deepmerge;
  }

  var customMerge = options.customMerge(key);
  return typeof customMerge === 'function' ? customMerge : deepmerge;
}

function getEnumerableOwnPropertySymbols(target) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function (symbol) {
    return target.propertyIsEnumerable(symbol);
  }) : [];
}

function getKeys(target) {
  return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}

function propertyIsOnObject(object, property) {
  try {
    return property in object;
  } catch (_) {
    return false;
  }
} // Protects from prototype poisoning and unexpected merging up the prototype chain.


function propertyIsUnsafe(target, key) {
  return propertyIsOnObject(target, key) && // Properties are safe to merge if they don't exist in the target yet,
  !(Object.hasOwnProperty.call(target, key) && // unsafe if they exist up the prototype chain,
  Object.propertyIsEnumerable.call(target, key)); // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
  var destination = {};

  if (options.isMergeableObject(target)) {
    getKeys(target).forEach(function (key) {
      destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
    });
  }

  getKeys(source).forEach(function (key) {
    if (propertyIsUnsafe(target, key)) {
      return;
    }

    if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
      destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
    } else {
      destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
    }
  });
  return destination;
}

function deepmerge(target, source, options) {
  options = options || {};
  options.arrayMerge = options.arrayMerge || defaultArrayMerge;
  options.isMergeableObject = options.isMergeableObject || isMergeableObject; // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
  // implementations can use it. The caller may not replace it.

  options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
  var sourceIsArray = Array.isArray(source);
  var targetIsArray = Array.isArray(target);
  var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

  if (!sourceAndTargetTypesMatch) {
    return cloneUnlessOtherwiseSpecified(source, options);
  } else if (sourceIsArray) {
    return options.arrayMerge(target, source, options);
  } else {
    return mergeObject(target, source, options);
  }
}

deepmerge.all = function deepmergeAll(array, options) {
  if (!Array.isArray(array)) {
    throw new Error('first argument should be an array');
  }

  return array.reduce(function (prev, next) {
    return deepmerge(prev, next, options);
  }, {});
};

var deepmerge_1 = deepmerge;
var cjs = deepmerge_1;

function eMarkupProxyFactory() {
  var descriptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return new Proxy(new Function(), {
    get: function get(_, prop) {
      // Super expiremental way of allowing e[componnentFunction] syntax

      /* BAD!
      if (prop.components && prop.components.length) {
      	console.warn(`Warning! Using e[${prop}] syntax is expiremental.`)
      	const component = prop.components.pop()
      	return createComponent(component)
      }
      */
      return eMarkupProxyFactory(descriptions.concat(prop));
    },
    apply: function apply(_, _1, options) {
      var description = descriptions.join('.');

      var _processDescription = processDescription(description),
          type = _processDescription.type,
          classes = _processDescription.classes,
          id = _processDescription.id;

      if (options[0] instanceof Function && !(options[0] instanceof Elemental)) {
        return createComponent(options[0]);
      } else {
        var _processOptions = processOptions(options),
            _processOptions2 = _slicedToArray(_processOptions, 2),
            props = _processOptions2[0],
            children = _processOptions2[1]; // Define id props
        // props.id can be undefined


        if (id || props.id) props.id = props.id || id; // Define classes props
        // props.classes is always defined as an array

        props.classes = props.classes ? typeof props.classes === 'string' ? [props.classes] : props.classes : classes || [];
        return new Elemental(type, props, children);
      }
    }
  });
} // Export an eMarkupProxy


var elemental = eMarkupProxyFactory(); // Class makes it easy to extend a Function object

var ExtensibleFunction =
/*#__PURE__*/
function (_Function) {
  _inherits(ExtensibleFunction, _Function);

  function ExtensibleFunction(f) {
    var _this;

    _classCallCheck(this, ExtensibleFunction);

    return _possibleConstructorReturn(_this, Object.setPrototypeOf(f, (this instanceof ExtensibleFunction ? this.constructor : void 0).prototype));
  }

  return ExtensibleFunction;
}(_wrapNativeSuper(Function));
/* Elementals are simple object structures derived from e markup. */


var Elemental =
/*#__PURE__*/
function (_ExtensibleFunction) {
  _inherits(Elemental, _ExtensibleFunction);

  function Elemental(type, props) {
    var _this2;

    var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    _classCallCheck(this, Elemental);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Elemental).call(this, function () {
      for (var _len = arguments.length, options = new Array(_len), _key = 0; _key < _len; _key++) {
        options[_key] = arguments[_key];
      }

      return _this2.extend(options);
    }));
    _this2.type = type;
    _this2.props = props;
    _this2.children = children;
    return _this2;
  }

  _createClass(Elemental, [{
    key: "extend",
    value: function extend(options) {
      var _processOptions3 = processOptions(options),
          _processOptions4 = _slicedToArray(_processOptions3, 2),
          newProps = _processOptions4[0],
          newChildren = _processOptions4[1];

      var props = cjs(this.props, newProps);
      var children = [].concat(_toConsumableArray(this.children), _toConsumableArray(newChildren));
      return new Elemental(this.type, props, children);
    }
  }]);

  return Elemental;
}(ExtensibleFunction);

function createComponent(componentFunction) {
  return function () {
    for (var _len2 = arguments.length, options = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      options[_key2] = arguments[_key2];
    }

    var _processOptions5 = processOptions(options),
        _processOptions6 = _slicedToArray(_processOptions5, 2),
        props = _processOptions6[0],
        children = _processOptions6[1];

    return componentFunction(props, children);
  };
}
/* Takes options and returns [props, children].

Options are arguments for an e markup tag.
For example: e.div(...options) */


function processOptions(options) {
  var props = {};
  var children = [];
  options.forEach(function (option) {
    // Flatten array options
    if (Array.isArray(option)) {
      var _processOptions7 = processOptions(option),
          _processOptions8 = _slicedToArray(_processOptions7, 2),
          subprops = _processOptions8[0],
          subchildren = _processOptions8[1];

      children = children.concat(subchildren);
      props = _objectSpread2({}, props, {}, subprops);
    } // Properties
    // else if (typeof option === 'object' && state.isReactor(option)) {
    else if (isObjLiteral(option)) {
        props = _objectSpread2({}, props, {}, option);
      } // Children
      else {
          children.push(option);
        }
  });
  return [props, children];
}
/* Descriptions are strings describing an element's type, class, and id. */


function processDescription(descripton) {
  var type;
  var classes = [];
  var id;
  descripton.replace(/^([\w-|]+)/, function (match, part) {
    type = part;
  });
  descripton.replace(/\.([\w-]+)/g, function (match, part) {
    classes.push(part);
  });
  descripton.replace(/#([\w-]+)/g, function (match, part) {
    id = part;
  });
  return {
    type: type,
    classes: classes,
    id: id
  };
}

function isObjLiteral(_obj) {
  var _test = _obj;
  return _typeof(_obj) !== 'object' || _obj === null ? false : function () {
    while (!false) {
      if (Object.getPrototypeOf(_test = Object.getPrototypeOf(_test)) === null) {
        break;
      }
    }

    return Object.getPrototypeOf(_obj) === _test;
  }();
}

function render(model, rootElement) {
  model = Array.isArray(model) ? model : [model];
  model.map(function (model, index) {
    handleChild(rootElement, model);
  });
}

function createElement(_ref) {
  var elementName = _ref.type,
      props = _ref.props,
      children = _ref.children;

  // Unsafe text node elements
  if (elementName === '_unsafe') {
    return createUnsafeTextNode(children);
  } // Normal DOM elements
  else {
      var element = document.createElement(elementName);
      Object.entries(props).forEach(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            propName = _ref3[0],
            propValue = _ref3[1];

        return handleProp(element, propName, propValue);
      });
      children.forEach(function (child) {
        handleChild(element, child);
      });

      if (props.ref && props.ref instanceof Reactor) {
        // Hacky way of making sure the element has been mounted to the DOM
        // before updating ref
        setTimeout(function () {
          props.ref.state = element;
        }, 0);
      }

      return element;
    }
}

function handleProp(el, propName, propValue) {
  if (propValue instanceof Reactor) {
    suit(function () {
      handleProp(el, propName, propValue.state);
    });
  } else if (typeof propValue === 'function') {
    el.addEventListener(propName, propValue);
  } else if (_typeof(propValue) === 'object' && propName === 'style') {
    handleStyles(el, propValue);
  } else {
    updateElementProperty(el, propName, propValue);
  }
}

function updateElementProperty(el, propName, propValue) {
  // ignored props
  if (['children', 'ref'].includes(propName)) return; // classes prop

  if (propName === 'classes') {
    if (propValue.length) el.className = propValue.join(' ');
  } // attribute props
  else {
      if (el[propName]) {
        el[propName] = propValue;
      }

      el.setAttribute(propName, propValue);
    }
}

function handleChild(element, child, index) {
  index = index || element.childNodes.length;
  child = child instanceof Elemental ? createElement(child) : child;

  if (child instanceof Reactor) {
    var childStartIndex = element.childNodes.length;
    var childrenCount = 0; // Bind reactor to DOM

    suit(function () {
      var children = Array.isArray(child.state) ? child.state : [child.state]; // Remove all old child nodes

      while (childrenCount) {
        childrenCount -= 1;
        var oldChild = element.childNodes[childStartIndex + childrenCount];
        if (oldChild) element.removeChild(oldChild);
      } // Add new child nodes


      children.forEach(function (child, index) {
        handleChild(element, child, childStartIndex + index);
        ++childrenCount;
      });
    }); // Utilize mutation API for efficient updates to the DOM

    suit(function () {
      var _child$mutation$state = child.mutation.state,
          type = _child$mutation$state.type,
          key = _child$mutation$state.key,
          value = _child$mutation$state.value;

      if (type === 'push') {
        handleChild(element, value, childStartIndex + key);
        ++childrenCount;
      }

      if (type === 'pull') {
        var oldChild = element.childNodes[childStartIndex + key];
        if (oldChild) element.removeChild(oldChild);
        --childrenCount;
      }

      if (type === 'put') {
        var _oldChild = element.childNodes[childStartIndex + key];
        if (_oldChild) element.removeChild(_oldChild);
        handleChild(element, value, childStartIndex + key);
      }
    });
  } // Append child normally
  else if (typeof child !== 'undefined') {
      insertChildNodeInParentAt(childSafety(child), element, index);
    }
}

function handleStyles(el, styles) {
  Object.entries(styles).forEach(function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2),
        styleProp = _ref5[0],
        styleValue = _ref5[1];

    if (styleValue instanceof Reactor) {
      suit(function () {
        return el.style[styleProp] = styleValue.state;
      });
    } else {
      el.style[styleProp] = styleValue;
    }
  });
}

function createTextNode(texts) {
  var el = document.createTextNode('');

  if (!Array.isArray(texts)) {
    texts = [texts];
  } // HTML Entities


  if (texts.some(function (text) {
    return text instanceof Reactor;
  })) {
    suit(function () {
      return el.textContent = texts.map(function (text) {
        return text instanceof Reactor ? text.state : text;
      }).join('');
    });
  } else {
    el.textContent = texts.join('');
  }

  return el;
}

function decodeHTMLEntities(html) {
  var txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
}

function createUnsafeTextNode(texts) {
  return createTextNode(texts.map(function (text) {
    return decodeHTMLEntities(text);
  }));
} // Inserts a child DOM node at a specific index


function insertChildNodeInParentAt(child, parent) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (index === null || index >= parent.childNodes.length) {
    return parent.appendChild(child);
  } else {
    var referenceNode = parent.childNodes[Math.max(0, index)];
    return parent.insertBefore(child, referenceNode);
  }
} // Boolean Functions


function isDOM(obj) {
  try {
    //Using W3 DOM2 (works for FF, Opera and Chrome)
    return obj instanceof HTMLElement || obj instanceof Text;
  } catch (e) {
    //Browsers not supporting W3 DOM2 don't have HTMLElement and
    //an exception is thrown and we end up here. Testing some
    //properties that all elements have (works on IE7)
    return _typeof(obj) === 'object' && obj.nodeType === 1 && _typeof(obj.style) === 'object' && _typeof(obj.ownerDocument) === 'object';
  }
}
/* Returns something that is safe to append to a parent DOM node*/


function childSafety(child) {
  if (isDOM(child)) {
    return child;
  } else if (typeof child === 'string') {
    return createTextNode(child);
  } else {
    throw new Error("Unknown child type ".concat(_typeof(child)));
  }
}

var jarvis = /*#__PURE__*/Object.freeze({
  __proto__: null,
  render: render
});

export { Elemental, Reactor, elemental as e, jarvis, suit, suit as v };
