var fs = require('fs');
var path = require('path');
const { Suite } = require('benchmark');
const classnames = require('classnames');
const classcat = require('classcat');
const clsx = require('clsx');
const spaces = require('one-spaces');

const infoColor = '\x1b[36m%s\x1b[0m';
const logColor = '\x1b[33m%s\x1b[0m';

function printTitle(title) {
  console.log(infoColor, `\n\nBenchmark Test: ${title}`);
}

function benchmark() {
  const suite = new Suite();
  suite
    .add('classnames', () => classnames.apply(null, arguments))
		.add('classcat', () => classcat.apply(null, [...arguments]))
		.add('clsx', () => clsx.apply(null, arguments))
		.add('one-spaces', () => spaces.apply(null, arguments))
    .on('cycle', (e) => console.log(logColor, e.target.toString()))
    .on('complete', () => console.log(infoColor, `Fastest is ${suite.filter('fastest').map('name')}`));
  suite.run();
}

printTitle('arguments');
benchmark(
  'cls1',
  'cls2',
  'cls3',
  'cls4',
  'cls5',
  'cls6'
);

printTitle('array');
benchmark(
  'cls1',
  ['cls2', 'cls3'],
  ['cls4', 'cls5'],
  'cls6'
);

printTitle('nested array');
benchmark(
  ['cls1', [[['cls2']]], ['cls3']],
  [[['cls4', 'cls5']], 'cls6'],
);

printTitle('mix');
benchmark(
  'cls1',
  null,
  'cls2',
  false && 'cls3',
  true && 'cls4',
  ['cls5'],
  undefined,
  'cls6'
);
