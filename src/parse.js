import fs from 'fs';

export default (filename) => JSON.parse(fs.readFileSync(filename, 'utf-8'));
