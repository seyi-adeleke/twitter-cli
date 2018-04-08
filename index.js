const program = require('commander');
const currentVersion = '0.0.1';


program
	.version(currentVersion)
	.usage('<command> [options]')


program
  .command('tweet <tweet>')
  .description('Create a new tweet')
  .action(function(tweet, command) {
    if(command) {
        console.log(tweet)
    }
  });

program.parse(process.argv);
