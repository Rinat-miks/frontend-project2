import genDiff from './gendiff.js';
import parse from './parse.js';
import diffFormat from './formatters/index.js'

const printDiff = (firstFile, secondFile, type) => {
  const object1 = parse(firstFile);
  const object2 = parse(secondFile);
  const difference = genDiff(object1, object2);
  console.log(diffFormat(difference, type));
};

export default printDiff;
