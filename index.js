let year = require('./lib/year').year;

export function root(req, res) {
  const assistant = new Assistant({request: req, response: res});
  console.log('Request headers: ' + JSON.stringify(req.headers));
  console.log('Request body: ' + JSON.stringify(req.body));

  var action = req.body.result.action;

  if (action == 'aura.year') {
    year(req, res);
  } else {
    res.status(200);
  }
};
