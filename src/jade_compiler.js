/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name  : jade_compiler.js
* Purpose    :
* Created at : 2015-10-05
* Updated at : 2015-10-05
* Author     : jeefo
_._._._._._._._._._._._._._._._._._._._._.*/

"use strict";

var fse      = require("fs-extra"),
	path     = require("path"),
	jade     = require("jade");

var i = 0;
module.exports = function (output) {
	return function (filepath) {
		var html;

		try	{
			html = jade.compileFile(filepath)();
		} catch(e) {
			console.error(e.message);
			return;
		}

		filepath = path.join(output, filepath);
		filepath = filepath.replace(/jade$/, "html");

		console.log(i++, "[JADE COMPILE SUCCEEDED] :", filepath);
		fse.outputFileSync(filepath, html);
	};
};
