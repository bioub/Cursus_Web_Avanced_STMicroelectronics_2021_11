const fs = require('fs');

// Sync
const buffer = fs.readFileSync('.gitignore');
console.log(buffer.toString('utf-8'));

// Async
fs.readFile('.gitignore', (err, buffer) => {
  console.log(buffer.toString('utf-8'));
});
