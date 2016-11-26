// Module dependencies.
var util = require('util');
var flatten = require('./flatten');
/**
 * Middleware Chain module.
 * Main middleware chain module export.
 *
 * @param {Object} context Optional initial context object.
 * @param {Array} chain Array of middleware functions to call in order.
 * @exports Chain module
 */

module.exports = function(context, chain) {
  if (!chain) {
    chain = context;
    context = {};
  }

  // Context should be an object.
  if (typeof context !== 'object' || util.isArray(context)) {
    throw new Error('Context must be an object.')
  }

  // Chain should be an array.
  if (!util.isArray(chain)) {
    throw new Error('Chain must be an array.');
  }

  // Chain flattening
  chain= flatten(chain);

  /**
   * Next function.
   * Calls the next middleware in chain.
   */

  function next() {
    var middleware = chain.shift();

    if (middleware && typeof middleware === 'function') {
      middleware.call(this, context, next);
    }

    return this;
  }

  // Start the chain.
  return next();
};