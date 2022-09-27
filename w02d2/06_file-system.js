const fs = require('fs');

// console.log(fs);

// const fileContents = fs.readFileSync('./data.html', { encoding: 'utf16le' });

// console.log('sync file read:', fileContents.length);

// fs.readFile('./data.html', { encoding: 'utf-8' }, (err, data) => {
//   if (err) {
//     return console.log('error', err);
//   }

//   console.log('data', data.length);
// });

fs.writeFile('index.html', 'hello world!', () => {
  console.log('file writing is done?');
});
