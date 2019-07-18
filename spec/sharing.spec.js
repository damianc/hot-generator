const HotGenerator = require('../src/hg');

describe('Two hot generators', () => {

	it('should share a common instance of a generator', () => {
		var hotNums = new HotGenerator(function* () {
			yield* [1, 2, 3, 4];
		});

		var genA = hotNums();
		var genB = hotNums();

		expect(genA.next().value).toEqual(1);
		expect(genB.next().value).toEqual(2);
		expect(genA.next().value).toEqual(3);
		expect(genB.next().value).toEqual(4);
	});

});
