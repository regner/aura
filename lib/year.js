let Assistant = require('actions-on-google').ApiAiAssistant;

export function year(req, res) {
  function responseHandler (assistant) {
    assistant.tell('This was a year action...');
  }

  assistant.handleRequest(responseHandler);
  res.status(200);
};