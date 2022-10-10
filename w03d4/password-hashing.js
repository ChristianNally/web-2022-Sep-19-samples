const bcrypt = require('bcryptjs');

const password = '1234';

// bcrypt.genSalt(10, (err, salt) => {
//   console.log(salt);
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

bcrypt.genSalt(10)
  .then((salt) => {
    return bcrypt.hash(password, salt);    
  })
  .then((hash) => {
    console.log(hash);
    return 10;
  })
  .then((data) => {});

console.log('bottom of file');


// const promise = bcrypt.genSalt(10);

// console.log(bcrypt);

// const salt = bcrypt.genSaltSync();

// console.log('salt', salt);

// const hash = bcrypt.hashSync(password, salt);

// console.log('hash', hash);

// const hashFromDatabase = '$2a$10$7UD8SECZiHCTtmf6WL9iY.G76/yFIpTTHTCatV73FUARV0gd8LIsu';

// const result = bcrypt.compareSync('1234', hashFromDatabase);
// console.log(result);
