'use strict'

var CMDR_KEYS = ['commands', 'options', 'parent', 'args', 'Command', 'commands', 'Option', 'options', 'rawArgs']

/**
 * convert commander.js instance to POJO
 * @param {Commander} commander Commander instance
 * @param {object} [opts]
 * @param {boolean} [opts.mergeParent]
 * @returns {object} pojo
 */
function commanderToPojo (commander, opts) {
  opts = opts || {}
  let pojo = {}
  for (var key in commander) {
    if (!commander.hasOwnProperty(key)) {
      /* pass */
    } else if (key[0] === '_') {
      /* pass, private */
    } else if (CMDR_KEYS.indexOf(key) > -1) {
      /* pass, cmdr internal key */
    } else {
      pojo[key] = commander[key]
    }
  }
  /* istanbul ignore next */
  if (opts.mergeParent) {
    var par = commanderToPojo(commander.parent)
    for (var parKey in par) pojo[parKey] = par[parKey]
  }
  return pojo
}

module.exports = commanderToPojo
