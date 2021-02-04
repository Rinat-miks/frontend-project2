import fs from 'fs';

export default (filename) => {
  if (filename.endsWith('.json')) {
    return JSON.parse(fs.readFileSync(filename, 'utf-8'));
  }
};
