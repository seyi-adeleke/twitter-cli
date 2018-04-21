const program = require('commander');
const currentVersion = '0.0.1';
const commands = require('./commands')(program);

program
	.version(currentVersion)
	.usage('<command> [options]')

program.parse(process.argv);
