require('dotenv').config();

const Twitter  = require('twitter');
const colors = require('colors');

const config = require('../config');
const twitClient  = new Twitter(config.twitter);


module.exports =  {
    makeTweet: (tweet) => {
        twitClient.post('statuses/update', { status: tweet })
            .then((response) => {
                console.log('Your tweet was sent!'.green);
            })
            .catch(function (error) {
                console.log('Something Just happened rn'.red);
            })
    },
    listTweets: () => {

    },
};

