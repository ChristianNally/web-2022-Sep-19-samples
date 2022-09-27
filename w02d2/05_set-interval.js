let i = 10;

const intervalRef = setInterval(function() {
  i--;
  console.log('hello', i);

  if (i <= 5) {
    // clearInterval(intervalRef);
    clearInterval(this);
  }
}, 100);

// setTimeout(() => {
//   clearInterval(intervalRef);
// }, 1050);
