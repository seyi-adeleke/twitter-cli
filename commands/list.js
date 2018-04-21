module.exports = (program) => {
    program
        .command('list')
        .description('Get a list of tweets')
        .action(function(tweet, command) {
            console.log('hello')
    })
};