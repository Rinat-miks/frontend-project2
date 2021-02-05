import yaml from 'js-yaml';

export default (file, extension) => {
  if (extension === '.json') {
    return JSON.parse(file);
  }
  if (extension === '.yml') {
    return yaml.load(file);
  }
  return console.log('unknown file format');
};
