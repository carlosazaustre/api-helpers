#api-helpers

A set of helpers functions to use on  REST API developments
***
### jsonfy
Returns a string to use in a REST response. Takes 2 parameters:

* **message**: A string to send information to the client.
* **data**: An object with thedata to response.

Usage:
```js
var jsonfy = require('api-helpers').jsonfy;

// Controller method on REST API
function getData (req, res) {
  var data = {};
  res.end(jsonfy('OK', data));
}
```
***
### fail
Handler the errors in a request, returns status code `500` and the error message. Takes 2 parameters:

* **err**: The error from callback function
* **res**: The response to end the request
Usage:

```js
// Controller method on REST API
var fail = request('api-helpers').fail

function getData (req, res) {
  whatever(req, res, function(err, data) {
    if (err) fail(err, res)
  })
}
```
***

And more in coming...



### License
MIT &copy; 2105 Carlos Azaustre
