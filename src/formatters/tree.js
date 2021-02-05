/* eslint-disable no-param-reassign */
import _ from 'lodash';

const tab = '  ';

const tree = (difference, deepCount = 0) => {
  const keys = Object.keys(difference);
  const treeResult = keys.reduce((acc, key) => {
    if (!_.isArray(difference[key])) {
      acc = `${acc}\n${tab.repeat(deepCount)}  ${key}: `;
      acc += tree(difference[key], deepCount + 1);
    }
    if (_.isArray(difference[key])) {
      acc += difference[key].reduce((accum, obj) => {
        if (obj.changetype === 'nochange') {
          return `${accum}\n${tab.repeat(deepCount)}    ${key}: ${obj.value}`;
        }
        if (obj.changetype === 'deleted') {
          return `${accum}\n${tab.repeat(deepCount)}  - ${key}: ${obj.value}`;
        }
        if (obj.changetype === 'added') {
          return `${accum}\n${tab.repeat(deepCount)}  + ${key}: ${obj.value}`;
        }
        if (obj.changetype === 'updated') {
          return `${accum}\n${tab.repeat(deepCount)}  - ${key}: ${obj.originalValue}\n${tab.repeat(deepCount)}  + ${key}: ${obj.newValue}`;
        }
        return accum;
      }, '');
    }
    return acc;
  }, '');
  return `{${treeResult}\n${tab.repeat(deepCount)}}`;
};

export default tree;
