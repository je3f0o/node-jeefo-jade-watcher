/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name  : parse_options.js
* Purpose    :
* Created at : 2015-10-04
* Updated at : 2015-10-04
* Author     : jeefo
_._._._._._._._._._._._._._._._._._._._._.*/

"use strict";

var fse    = require("fs-extra"),
	getopt = require("jeefo-getopt");

var parsed_options = getopt([
	["w" , "watch="  , "[File, dir, or glob] to watch"] ,
	["o" , "output=" , "Output directory"] ,
	["h" , "help"    , "TODO: Later ..."]
]).parse_system().options;

function error_exit (message) {
	console.error("ERROR : " + message);
	process.exit(1);
}

var watch  = parsed_options.watch  || ".";
var output = parsed_options.output || ".";

if (! fse.existsSync(watch)) {
	console.error("Watch :", watch);
	error_exit("Watch [File | Directory] is not found.");
}
if (fse.lstatSync(watch).isDirectory()) {
	watch += "/**/*.jade";
}

module.exports = {
	watch  : watch,
	output : output
};
