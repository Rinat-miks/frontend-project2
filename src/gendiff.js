import _ from 'lodash';

const genDiff = (object1, object2) => {
  const keys = _.union(Object.keys(object1), Object.keys(object2));
  const firstFileKeys = Object.keys(object1);
  const secondFileKeys = Object.keys(object2);
  const commonKeys = firstFileKeys.filter((key) => secondFileKeys.includes(key));
  const uniqFirstFileKeys = firstFileKeys.filter(
    (key) => !secondFileKeys.includes(key),
  );
  const uniqSecondFileKeys = secondFileKeys.filter(
    (key) => !firstFileKeys.includes(key),
  );
  const difference = keys.reduce((acc, key) => {
    if (uniqFirstFileKeys.includes(key)) {
      acc[key] = [{ value: object1[key], changetype: 'deleted' }];
      return acc;
    }
    if (uniqSecondFileKeys.includes(key)) {
      acc[key] = [{ value: object2[key], changetype: 'added' }];
      return acc;
    }
    if (commonKeys.includes(key)) {
      if (_.isObject(object1[key]) && _.isObject(object2[key])) {
        acc[key] = genDiff(object1[key], object2[key]);

        return acc;
      }
      if (object1[key] === object2[key]) {
        acc[key] = [{ value: object1[key], changetype: 'nochange' }];
        return acc;
      }
      acc[key] = [
        { originalValue: object1[key], newValue: object2[key], changetype: 'updated' },
      ];
      return acc;
    }
    return acc;
  }, {});
  return difference;
};

export default genDiff;
