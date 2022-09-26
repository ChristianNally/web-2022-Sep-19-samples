/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
const mode = function(arr) {
  // 1. create our piles

  // create a variable to hold our "piles"
  const piles = {};

  // look at each number in the arr
  for (const num of arr) {
    // have we seen this number before?
    // if (num in piles) {
    if (piles[num]) {
      // if yes, increment the number of times seen
      piles[num] += 1;
    } else {
      // if no, we have to create a pile with a value of 1
      piles[num] = 1;
    }
  }

  // console.log(piles);

  // 2. compare the piles

  // create variables to hold the highest value seen so far AND the key associated with that value
  let highestValue = 0;
  let highestKey = null;

  // look at each key/value pair in piles
  for (const key in piles) {
    // grab the value from the piles object
    const value = piles[key];

    // if the value is greater than the highest seen so far
    if (value > highestValue) {
      // we need to replace the highest seen so far AND the highest key
      highestValue = value;
      highestKey = key;
    }
  }

  // return the highest key
  return Number(highestKey);
}; 

// Don't change below:
module.exports = { mode };
