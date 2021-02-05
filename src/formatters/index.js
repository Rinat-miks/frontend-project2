import tree from './tree.js';
import plain from './plain.js';
import json from './json.js';

const diffFormat = (difference, type) => {
  if (type === 'tree') {
    return tree(difference);
  }
  if (type === 'JSON') {
    return json(difference);
  }
  if (type === 'plain') {
    return plain(difference);
  }
};

export default diffFormat;
