const delays = [419, 30, 138, 700, 270, 500];

for (const delay of delays) {
  setTimeout(() => {
    console.log(delay);
  }, delay);
}
