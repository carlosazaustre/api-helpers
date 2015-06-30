var jsonfy = require('../lib/jsonfy')

describe("JSONFY", function() {

  it('Should be return a JSON', function() {
    var data = [
        { id: 1, value: "Hello" },
        { id: 2, value: "World" }
      ]

    var objJSON = jsonfy('ok', data)

    expect(objJSON).toMatch(/\d{1,}/)
  })

})
