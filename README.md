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

The last() method receives the last known value returned from any instance of a generator.

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

genA.last();
// {value: 2, done: false}

genB.last();
// {value: 2, done: false}

genA.next();
// {value: 3, done: false}
```
