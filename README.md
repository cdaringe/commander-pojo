# commander-pojo

transform your parsed [commander.js](https://github.com/tj/commander.js) instance into a [pojo](https://en.wikipedia.org/wiki/Plain_Old_Java_Object)

[ ![Codeship Status for cdaringe/commander-pojo](https://app.codeship.com/projects/b340eb00-973d-0134-4e2b-76a8c82e6885/status?branch=master)](https://app.codeship.com/projects/187024) ![](https://img.shields.io/badge/standardjs-%E2%9C%93-brightgreen.svg) [![Coverage Status](https://coveralls.io/repos/github/cdaringe/commander-pojo/badge.svg?branch=master)](https://coveralls.io/github/cdaringe/commander-pojo?branch=master)

## install

`npm install --save commander-pojo`

## usage

suppose you run the following: `some-bin --test-flag test-cmd`

```js
// some-bin
#!/usr/bin/env node
var cpojo = require('commander-pojo')
var program = require('commander')
program
  .option('--test-flag', 'dummy  flag')
  .arguments('<test-cmd> [test-arg]')
  .action(function (cmd, arg) { /* ... */ })
  .option('--test-sub-flag', 'sub flag')
  .parse(process.argv)

console.log(program) // <== `program instanceof Commander`, loads of _privateCommanderStuff, +more
console.log(cpojo(program)) // <== { testFlag: true }. simple pojo!
```

## docs

see [here](https://cdaringe.github.io/commander-pojo/). docs are auto generated by [jsdoc](http://usejsdoc.org/) and publish via [gh-pages](https://www.npmjs.com/package/gh-pages)
