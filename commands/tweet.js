const twitter = require('../twitter');


module.exports = (program) => {
    program
        .command('tweet <tweet>')
        .description('Create a new tweet')
        .action(function(tweet, command) {
            if(command) {
                twitter.makeTweet(tweet);
            }
    });
};