import genDiff from './gendiff.js';
import parse from './parse.js';
import formatDiff from './formatters/index.js';
import readFile from './readFile.js';
import getExtension from './getExtension.js';

const getDiff = (firstFile, secondFile, type) => {
  const object1 = parse(readFile(firstFile), getExtension(firstFile));
  const object2 = parse(readFile(secondFile), getExtension(secondFile));
  const difference = genDiff(object1, object2);
  return formatDiff(difference, type);
};

export default getDiff;
