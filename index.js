'use strict'

var jsonfy  = require('./lib/jsonfy')
var fail    = require('./lib/fail')

var toExport = {
  jsonfy  : jsonfy,
  fail    : fail
}

module.exports = toExport
