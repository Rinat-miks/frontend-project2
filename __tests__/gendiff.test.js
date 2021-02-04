/* eslint-disable import/order */
import genDiff from '../src/gendiff.js';
import parse from '../src/parse.js';
import tree from '../src/formatters/tree.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const treeExpect = readFile('treeResult.txt');
const json1 = parse(getFixturePath('firstfile.json'));
const json2 = parse(getFixturePath('secondfile.json'));
const difference1 = genDiff(json1, json2);

const yml1 = parse(getFixturePath('firstfile.yml'));
const yml2 = parse(getFixturePath('secondfile.yml'));
const difference2 = genDiff(yml1, yml2);

test('json-tree', () => {
  expect(tree(difference1)).toEqual(treeExpect);
});
test('yml-tree', () => {
  expect(tree(difference2)).toEqual(treeExpect);
});
