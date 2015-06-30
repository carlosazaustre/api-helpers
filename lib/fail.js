'use strict'

var jsonfy = require('./jsonfy')

function fail (err, res) {
  res.statusCode = 500
  res.setHeader('Content-Type', 'application/json')
  res.end(jsonfy(err.message))
}

module.exports = fail
