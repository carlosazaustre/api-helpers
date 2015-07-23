'use strict'

var jsonfy  = require('./lib/fail')
var fail    = require('./lib/jsonfy')

var toExport = {
  jsonfy  : jsonfy,
  fail    : fail
}

module.exports = toExport
