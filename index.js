let year = require('./lib/year').year;

exports.root = function root(req, res) {
  console.log('Request headers: ' + JSON.stringify(req.headers));
  console.log('Request body: ' + JSON.stringify(req.body));

  var action = req.body.result.action;

  if (action == 'aura.year') {
    year(req, res);
  } else {
    res.status(200);
  }
};
