var program = require('commander')
program
  .option('--test-flag', 'dummy  flag')
  .arguments('<test-cmd> [test-arg]')
  .action(function (arg, cmdr) {
    console.log('oi')
  })
  .option('--test-sub-flag', 'sub flag')
  .description('test cmd')
  .parse(process.argv)

module.exports = function () {
  return program
}
