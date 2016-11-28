#!/usr/bin/env node
var cpojo = require('../')
var program = require('commander')
program
  .option('--test-flag', 'dummy  flag')
  .arguments('<test-cmd> [test-arg]')
  .action(function (cmd, arg) { /* ... */ })
  .option('--test-sub-flag', 'sub flag')
  .parse(process.argv)

console.log(program) // <== `program instanceof Commander`, loads of _privateCommanderStuff, +more
console.log(cpojo(program)) // <== { testFlag: true }. simple pojo!
