const HotGenerator = require('../src/hg');

describe('Any instance of a generator', () => {

	it('should be iterable', () => {
		var hotNums = new HotGenerator(function* () {
			yield* [1, 2, 3, 4];
		});

		var genA = hotNums();
		var genB = hotNums();

		genA.next();

		var remaining = [...genB];
		expect(remaining).toEqual([2, 3, 4]);
	});

});
