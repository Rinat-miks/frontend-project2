import genDiff from '../src/gendiff.js';
import parse from '../src/parse.js';
import tree from '../src/tree.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const treeExpect = readFile('treeResult.txt');
const object1 = parse(getFixturePath('firstfile.json'));
const object2 = parse(getFixturePath('secondfile.json'));
const difference = genDiff(object1, object2);

test('genDiff', () => {
  expect(tree(difference)).toEqual(treeExpect);
});
