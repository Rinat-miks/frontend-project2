import genDiff from './gendiff.js';
import parse from './parse.js';
import tree from './tree.js';

const printDiff = (firstFile, secondFile, type) => {
  const object1 = parse(firstFile);
  const object2 = parse(secondFile);
  const difference = genDiff(object1, object2);
  if (type === 'tree') {
    console.log(tree(difference));
  }
};



export default printDiff;
