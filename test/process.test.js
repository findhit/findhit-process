var Process = require('../index'),

	sinon = require('sinon'),
	chai = require('chai'),
	expect = chai.expect;

describe( "Process", function () {

	describe( "nextTick", function () {

		it( "run right away", function ( done ) {
		
			Process.nextTick(function () {

				done();

			});
		
		});

		it( "run with context", function ( done ) {

			var context = {
				foo: 'bar',
			};

			Process.nextTick(function () {

				expect( this ).to.be.equal( context );

				done();

			}, context );
		
		});

	});

});