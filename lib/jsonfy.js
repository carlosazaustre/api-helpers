'use strict'

function jsonfy (message, data) {

  var toJSON = {
    message : message,
    data    : data
  }

  return JSON.stringify(toJSON)
}

module.exports = jsonfy
