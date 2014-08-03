'use strict';

/**
 * To use it, you just need to import it:
 *
 * ```js
 * var Process = require('findhit-process');
 * ```
 *
 *
 * @class Process
 */
module.export = (function () {
	var Process = {};

	Process.nextTick = function ( fn, context ) {
		if( typeof fn != 'function' ) return;

		var wait = 4, // This should be changable depending on browser (http://ejohn.org/blog/analyzing-timer-performance/)
			timerFn = process && process.nextTick || setTimeout;

		if( context )
			return timerFn( function () {
				fn.apply( context, [] );
			}, wait );
		else
			return timerFn( fn, wait );
	};

	return Process;
});