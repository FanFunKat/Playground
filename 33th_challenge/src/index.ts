import fs from 'fs'; // npm install @types/node

const matches = fs.readFileSync('football.csv', {
  encoding: 'utf-8'
});

