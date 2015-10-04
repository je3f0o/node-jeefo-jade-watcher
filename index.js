/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name  : jade_change_watcher.js
* Purpose    :
* Created at : 2015-10-04
* Updated at : 2015-10-05
* Author     : jeefo
_._._._._._._._._._._._._._._._._._._._._.*/

"use strict";

var options       = require("./src/parsed_options"),
	chokidar      = require("chokidar"),
	jade_compiler = require("./src/jade_compiler")(options.output);

var chokidar_options = {
	cwd            : ".",
	persistent     : true,
	ignoreInitial  : false,
	followSymlinks : true,

	depth            : 99,
	interval         : 100,
	alwaysStat       : false,
	usePolling       : true,
	binaryInterval   : 300,
	awaitWriteFinish : {
		pollInterval       : 100,
		stabilityThreshold : 2000
	},

	ignorePermissionErrors : false,
	atomic                 : true
};

// Initialize watcher
var watcher = chokidar.watch(options.watch, chokidar_options);

watcher
	.on("add", jade_compiler)
	.on("change", jade_compiler)
