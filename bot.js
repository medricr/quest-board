const Twitter = require('twitter');
const auth = require('./auth.json');

const client = new Twitter({
  consumer_key: auth.api_key,
  consumer_secret: auth.api_secret_key,
  access_token_key: auth.access_token,
  access_token_secret: auth.access_token_secret
});

client.post('statuses/update', {status: 'Adventure awaits!'})
  .then(function(tweet){
    console.log(tweet)
  })
  .catch(function(error){
    console.log(error)
  })

