// let Assistant = require('actions-on-google').ApiAiAssistant;

// exports.year = function year (req, res) {
//   const assistant = new Assistant({request: req, response: res});
//   const baseYearSubtraction = 1898;

//   var currentYear = new Date().getFullYear();

//   function responseHandler (assistant) {
//     assistant.tell('The current year is YC' + (currentYear - baseYearSubtraction));
//   }

//   assistant.handleRequest(responseHandler);
//   res.status(200);
// };
