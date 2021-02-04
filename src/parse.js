import fs from 'fs';
import yaml from 'js-yaml';

export default (filename) => {
  if (filename.endsWith('.yml')) {
    return yaml.load(fs.readFileSync(filename, 'utf-8'));
  }
  return JSON.parse(fs.readFileSync(filename, 'utf-8'));
};
