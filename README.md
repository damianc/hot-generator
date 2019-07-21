# Hot Generator

Wraps a generator so that it shares the current value among all the instances.

## Usage

```
var hotNums = new HotGenerator(function* () {
	yield* [1, 2, 3, 4];
});

var genA = hotNums();
var genB = hotNums();

genA.next();
// {value: 1, done: false}

genB.next();
// {value: 2, done: false}

genA.next();
// {value: 3, done: false}

genB.next();
// {value: 4, done: false}

genA.next();
// {value: undefined, done: true}
```

### `last()` method

The `last()` method of `HotGenerator` receives the last known value returned from any instance of a generator.

```
var hotNums = new HotGenerator(function* () {
	yield* [1, 2, 3, 4];
});

var genA = hotNums();
var genB = hotNums();

genA.next();
// {value: 1, done: false}

genB.next();
// {value: 2, done: false}

hotNums.last();
// {value: 2, done: false}
```

### `lastFrom()` method

Similar to the `last()` method, but here we can explicitly tell what instance of a generator we are interested in.

```
var hotNums = new HotGenerator(function* () {
	yield* [1, 2, 3, 4];
});

var genA = hotNums();
var genB = hotNums();

genA.next();
// {value: 1, done: false}

genB.next();
// {value: 2, done: false}

genA.next();
// {value: 3, done: false}

hotNums.last();
// {value: 3, done: false}

hotNums.lastFrom(genA);
// {value: 3, done: false}

hotNums.lastFrom(genB);
// {value: 2, done: false}
```
