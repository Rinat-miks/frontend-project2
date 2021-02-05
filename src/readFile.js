import fs from 'fs';
import path from 'path';

const readFile = (filePath) => fs.readFileSync(path.resolve(process.cwd(), filePath), 'utf-8');

export default readFile;
