// globalThis
// Это стандартизированный глобальный объект

// If you wrote some cross-platform JS code which could run on Node,
// in the browser environment, and also inside web-workers,
// you'd have a hard time getting hold of the global object.

// This is because it is window for browsers, global for Node, and self for web workers.
// If there are more runtimes, the global object will be different for them as well.

// So you would have had to have your own implementation of detecting runtime
// and then using the correct global – that is, until now.

// ES2020 brings us globalThis which always refers to the global object,
// no matter where you are executing your code:

// globalThis.setTimeout === window.setTimeout
// is true in the browser
