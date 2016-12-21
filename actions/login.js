// let Assistant = require('actions-on-google').ApiAiAssistant;
// let request = require('request');

// exports.loginCount = function loginCount (req, res) {
//   const assistant = new Assistant({request: req, response: res});

//   request('https://crest-tq.eveonline.com/', function (error, response, body) {
//     if (!error && response.statusCode === 200) {
//       var data = JSON.parse(body);

//       function responseHandler (assistant) {
//         assistant.tell('There are currently ' + data.userCount_str + ' pilots logged into New Eden.');
//       }

//       assistant.handleRequest(responseHandler);
//     } else {
//       function responseHandler (assistant) {
//         assistant.tell('Sorry but it appears New Eden is dead. Please ask again later.');
//       }

//       assistant.handleRequest(responseHandler);
//     }

//     res.status(200);
//   });
// };
