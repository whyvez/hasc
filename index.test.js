'use strict';

const test = require('tape');

const HASC = require('./index');

test('constructor', (t) => {
  const hasc = new HASC('ML');
  t.equal(hasc.code, 'ML', 'hasc code matches');
  t.end();
});

test('level: L0', (t) => {
  const hasc = new HASC('ML');
  t.equal(hasc.level, 0, 'returns level 0');
  t.end();
});

test('level: L1', (t) => {
  const hasc = new HASC('ML.FOO');
  t.equal(hasc.level, 1, 'returns level 1');
  t.end();
});

test('ML.FOO within ML', (t) => {
  const hasc = new HASC('ML.FOO');
  t.equal(hasc.within('ML'), true, 'ML.FOO is within ML');
  t.end();
});

test('ML not within ML.FOO', (t) => {
  const hasc = new HASC('ML');
  t.equal(hasc.within('ML.FOO'), false, 'ML.FOO is not within ML');
  t.end();
});

test('ML contains ML.FOO', (t) => {
  const hasc = new HASC('ML');
  t.equal(hasc.contains('ML.FOO'), true, 'ML contains ML.FOO');
  t.end();
});

test('ML.FOO does not contain ML', (t) => {
  const hasc = new HASC('ML.FOO');
  t.equal(hasc.contains('ML'), false, 'ML.FOO does not contain ML');
  t.end();
});
