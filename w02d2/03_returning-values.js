const higherOrderFunc = (callback) => {
  const user = { username: 'Alice' };

  console.log('1. before the setTimeout');
  setTimeout(() => {
    user.username = 'Bob';
    console.log('3. inside the setTimeout');

    callback(user);
  }, 500);
  console.log('2. after the setTimeout'); 
};

console.log('4. before the main call');

higherOrderFunc((bobObj) => {
  console.log('bobObj', bobObj);
  // send to the browser, write to a file
  console.log('6. inside the callback');
});

console.log('5. after the main call');

