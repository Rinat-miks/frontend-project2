import getDiff from '../src/index.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test.each([
  ['.json', '.yml', 'tree'],
  ['.json', '.json', 'tree'],
  ['.yml', '.yml', 'tree'],
  ['.json', '.yml', 'plain'],
  ['.json', '.json', 'plain'],
  ['.yml', '.yml', 'plain'],
  ['.json', '.yml', 'JSON'],
  ['.json', '.json', 'JSON'],
  ['.yml', '.yml', 'JSON'],
])('file1: %s, file2: %s, format: %s', (firstFileExtension, secondFileExtension, format) => {
  const firstFilePath = getFixturePath('firstfile' + firstFileExtension);
  const secondFilePath = getFixturePath('secondfile' + secondFileExtension);
  const expectFilePath = format + 'Result.txt';
  const expectFile = readFile(expectFilePath);

  expect((getDiff(firstFilePath, secondFilePath, format))).toEqual(expectFile);
});
