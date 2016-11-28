'use strict'

var tape = require('tape')
var cpojo = require('../')
var cli = require('./cli')

tape('commander pojo', function (t) {
  var prog = cli()
  var pojoed = cpojo(prog)
  t.deepEquals(
    Object.keys(pojoed).sort(),
    ['testFlag']
  )
  t.end()
})
