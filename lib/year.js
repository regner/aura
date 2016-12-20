let Assistant = require('actions-on-google').ApiAiAssistant;

exports.year = function year(req, res) {
  const assistant = new Assistant({request: req, response: res});
  
  function responseHandler (assistant) {
    assistant.tell('This was a year action...');
  }

  assistant.handleRequest(responseHandler);
  res.status(200);
};