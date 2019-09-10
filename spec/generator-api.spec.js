const HotGenerator = require('../src/hg');

describe('An instance of HotGenerator', () => {

	var hotNums;
	var gen;

	beforeEach(function () {
		hotNums = new HotGenerator(function* () {
			yield* [1, 2, 3, 4];
		});
		gen = hotNums();
	});

	it('should access the next() method', () => {
		expect(gen.next).toBeDefined();
	});

	it('should call the next() method successfully', () => {
		var call = gen.next();

		expect(call.value).toEqual(1);
		expect(call.done).toEqual(false);
	});

	it('should access the return() method', () => {
		expect(gen.return).toBeDefined();
	});

	it('should call the return() method successfully', () => {
		var call = gen.return(100);

		expect(call.value).toEqual(100);
		expect(call.done).toEqual(true);
	})

	it('should access the throw() method', () => {
		expect(gen.throw).toBeDefined();
	});

	it('should call the throw() method successfully', () => {
		class HotGeneratorError extends Error {}
		const errorMsg = 'Expected error has been thrown!';

		expect(function () {
			gen.throw(
				new HotGeneratorError(errorMsg)
			);
		}).toThrowError(HotGeneratorError, errorMsg);
	})

});
