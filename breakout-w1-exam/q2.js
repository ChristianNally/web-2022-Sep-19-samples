/* Question 2
 *
 *  Implement the functions defined below
 *
 */

// Meant to be used by median. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */

// 6,2,3,4,9,7
// 0 1 2 3 4 5

// length = 6
// midIndex = 3 - 1 


const median = function(arr) {
  arr.sort();

  const middleIndex = Math.floor(arr.length / 2);

  // is the array even-length?
  // % modulus
  if (arr.length % 2 === 0) {
    const valOne = arr[middleIndex];
    const valTwo = arr[middleIndex - 1];

    const sum = valOne + valTwo;
    const avg = sum / 2;

    return round(avg);
  }
  
  const middleValue = arr[middleIndex];
  return middleValue;
};

// Don't change below:
module.exports = { median };
