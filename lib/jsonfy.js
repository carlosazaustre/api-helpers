'use strict'

function jsonfy (message, data) {

  let toJSON = {
    message : message
    data    : data
  }

  return JSON.stringify(toJSON)
}

export default jsonfy
