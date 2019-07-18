const HotGenerator = require('../src/hg');

describe('The lastFrom() method of HotGenerator', () => {

	it('should return the last known value from the given instance of a generator', () => {
		var hotNums = new HotGenerator(function* () {
			yield* [1, 2, 3, 4];
		});

		var genA = hotNums();
		var genB = hotNums();

		genA.next();
		genB.next();
		genB.next();

		expect(hotNums.lastFrom(genA).value).toEqual(1);
		expect(hotNums.lastFrom(genB).value).toEqual(3);

		genA.next();

		expect(hotNums.lastFrom(genA).value).toEqual(4);
	});

});
