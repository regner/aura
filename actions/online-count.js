let Assistant = require('actions-on-google').ApiAiAssistant;

exports.onlineCount = function onlineCount (req, res) {
  const assistant = new Assistant({request: req, response: res});
  // 1898

  var currentYear = new Date().getFullYear()
  console.log(currentYear)

  function responseHandler (assistant) {
    assistant.tell('This was a year action...');
  }

  assistant.handleRequest(responseHandler);
  res.status(200);
};
