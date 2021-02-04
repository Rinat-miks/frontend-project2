#!/usr/bin/env node
/* eslint-disable import/no-duplicates */

import commander from 'commander';
import program from 'commander';
import printDiff from './src/index.js';

program
  .arguments('<firstFile> <secondFile> [type]')
  .description('Compares two configuration files and shows a difference')
  .version('1.0.0.', '-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format', 'tree')
  .action((firstFile, secondFile, type = 'tree') => {
    printDiff(firstFile, secondFile, type);
  });

commander.parse(process.argv);
