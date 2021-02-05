import _ from 'lodash';

const getPlainDiff = (difference, nodeName = '') => {
  const keys = Object.keys(difference);
  const plainDiff = keys.reduce((acc, key) => {
    if (!_.isArray(difference[key])) {
      return `${acc}\n${getPlainDiff(difference[key], `${key}.`)}`;
    }
    if (_.isArray(difference[key])) {
      return acc + difference[key].reduce((accum, obj) => {
        if (obj.changetype === 'nochange') {
          return accum;
        }
        if (obj.changetype === 'deleted') {
          return `${accum}\nProperty '${nodeName}${key}' was removed`;
        }
        if (obj.changetype === 'added') {
          return `${accum}\nProperty '${nodeName}${key}' was added with value: '${obj.value}'`;
        }
        if (obj.changetype === 'updated') {
          return `${accum}\nProperty '${nodeName}${key}' was updated. From '${obj.originalValue}' to '${obj.newValue}'`;
        }
        return accum;
      }, '');
    }
    return acc;
  }, '');
  return plainDiff.slice(1);
};

export default getPlainDiff;
