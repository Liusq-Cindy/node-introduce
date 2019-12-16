const strategies = require('./strategies');

module.exports = function (guize,rest) {
  var sum = 0;
  var lili = strategies[guize];
  sum = lili(rest, 'wrong')
  return sum;
};
