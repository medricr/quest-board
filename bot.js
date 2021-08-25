// bring in the twitter package
const Twitter = require('twitter');
// bring in the file with credentials
const auth = require('./auth.json');
// initialize clinet as instance of Twitter object
const client = new Twitter({
  consumer_key: auth.api_key,
  consumer_secret: auth.api_secret_key,
  access_token_key: auth.access_token,
  access_token_secret: auth.access_token_secret
});

// post tweet with catch block
client.post('statuses/update', {status: 'Adventure awaits!'})
  .then(function(tweet){
    console.log(tweet)
  })
  .catch(function(error){
    console.log(error)
  })