/* Question 1
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MIN - the lowest value in a list
 *
 * For example:
 *
 *    min([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    0
 */
const min = function(arr) {
  // return Math.min(...arr);

  // create a variable to hold the lowest value seen so far
  let lowestValue = arr[0];

  // look at each element of the array
  for (const currElement of arr) {
    // is the current element lower than our lowest value?
    if (currElement < lowestValue) {
      // if yes, replace the lowest value with the current element
      lowestValue = currElement;
    }
  }

  // return the lowest value seen
  return lowestValue;
};


/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const max = function(arr) {
  // create a variable to hold our max value
  let highestValue = arr[0];

  // look at each number in the arr
  for (const num of arr) {
    // if number is greater than our current max
    if (num > highestValue) {
      // replace current max with num
      highestValue = num;
    }
  }

  // return the max value
  return highestValue;
};

/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const range = function(arr) {
  const lowestValue = min(arr);
  const highestValue = max(arr);

  return highestValue - lowestValue;
};

// Don't change below:

module.exports = { min, max, range };
