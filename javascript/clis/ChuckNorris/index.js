#!/usr/bin/env node

/**
 * ChuckNorris
 * Gets a joke from the chuck norris api
 *
 * @author Van <https://www.vanscli.com/>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const axios = require('axios');
const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;
console.log(flags);
(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	debug && log(flags);

const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${flags.type}`)

console.log(res.data);
var poke = input.value


// if(input.includes('joke')){
// 	const res = await axios.get(`http://api.icndb.com/jokes/random?limitTo=[${flags.type}]`)
// 	console.log(res.data.value.joke);
// }
})();
