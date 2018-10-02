//// [arrayEvery.ts]
// Tests fix for #27496, predicates should not have to return booleans
const foo = [
    { name: 'bar' },
    { name: null },
    { name: 'baz' }
];
const fizz = [
    { name: 'buzz' },
    { name: 'fizzbuzz' }
];

foo.every(x => x.name);
fizz.every(x => x.name);

//// [arrayEvery.js]
// Tests fix for #27496, predicates should not have to return booleans
var foo = [
    { name: 'bar' },
    { name: null },
    { name: 'baz' }
];
var fizz = [
    { name: 'buzz' },
    { name: 'fizzbuzz' }
];
foo.every(function (x) { return x.name; });
fizz.every(function (x) { return x.name; });
