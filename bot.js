console.log('started') 
require('dotenv').config();
var keys = require('./keys.js');

var Twit = require('twit')

var T = new Twit({
consumer_key:process.env.TWITTER_CONSUMER_KEY,
consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
access_token:process.env.TWITTER_ACCESS_TOKEN_KEY,
access_token_secret:process.env.TWITTER_ACCESS_TOKEN_SECRET,
timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests. 
})


var params ={
   q: 'banana since:2017-07-11', 
   count: 50
  };

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
  console.log.apply(data);
}