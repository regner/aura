let Assistant = require('actions-on-google').ApiAiAssistant;
let request = require('request');

const ACTION_LOGIN_COUNT = 'aura.login.count';
const ACTION_YEAR = 'aura.year';
const ACTION_MARKET_PRICE = 'aura.market.price';

const ARG_EVE_ITEM = 'eve-item';
const ARG_MARKET_HUB = 'market-hub';

function year (assistant) {
  const baseYearSubtraction = 1898;
  const currentYear = new Date().getFullYear();

  assistant.tell('The current year is YC' + (currentYear - baseYearSubtraction));
}

function loginCount (assistant) {
  request('https://crest-tq.eveonline.com/', function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var data = JSON.parse(body);

      assistant.tell('There are currently ' + data.userCount_str + ' pilots logged into New Eden.');
    } else {
      assistant.tell('Sorry but it appears New Eden is dead. Please ask again later.');
    }
  });
}

function marketPrice (assistant) {

}

exports.root = function root (req, res) {
  console.log('Request headers: ' + JSON.stringify(req.headers));
  console.log('Request body: ' + JSON.stringify(req.body));

  const assistant = new Assistant({request: req, response: res});

  let actionMap = new Map();

  actionMap.set(ACTION_LOGIN_COUNT, loginCount);
  actionMap.set(ACTION_YEAR, year);

  assistant.handleRequest(actionMap);

  res.status(200);
};
