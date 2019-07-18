const HotGenerator = require('../src/hg');

describe('The last() method of HotGenerator', () => {

	it('should return the last known value from any instance of a generator', () => {
		var hotNums = new HotGenerator(function* () {
			yield* [1, 2, 3, 4];
		});

		var genA = hotNums();
		var genB = hotNums();

		genA.next();
		genB.next();

		expect(hotNums.last().value).toEqual(2);

		genB.next();
		genA.next();

		expect(hotNums.last().value).toEqual(4);
	});

});
