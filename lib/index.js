/**
 * @fileoverview Plugin Demo for Pluralsight course.
 * @author Jamis Charles
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");


module.exports.configs = {
	recommended: {
		plugins: ["delta"],
		rules: {
			"delta/no-fixme": "off",
			"delta/expire": "warn",
			"delta/no-giraffe": "error"
		}
	}
}

