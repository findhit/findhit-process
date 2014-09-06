findhit-process
===============

Wraps all capabilities of `process` on **nodejs**, some slightly modified, and it is designed to run on browser-side too.

## Instalation

```bash
npm install findhit-process --save
```

## Usage

```js

var Process = require('findhit-process');

Process.nextTick(function () {

	this.sodomethingAsync();

}, {
	sodomethingAsync: function () {
		console.log('yupi');
	},
});

```