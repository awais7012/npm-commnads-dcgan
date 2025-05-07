#!/usr/bin/env node

import { generateAnimeFace } from './index.js';

const args = process.argv.slice(2);

if (args.length === 0) {
  console.error('❌ Please provide a number.');
  process.exit(1);
}

const number = parseInt(args[0]);

if (isNaN(number)) {
  console.error('❌ Invalid number provided.');
  process.exit(1);
}

generateAnimeFace(number);
