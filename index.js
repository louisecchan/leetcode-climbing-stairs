// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Time complexity: O(n)O(n)O(n)

// Here n is the number of stairs.
// Because as it uses a for loop to calculate the fibonacci sequence, it has O(n)O(n)O(n) time complexity.

// Space complexity: O(1)O(1)O(1)

// Because as it only uses a constant amount of extra memory to store a few variables.

/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function (n) {
  if (n < 2) {
    return 1;
  }

  let firstStep = 1;

  let secondStep = 1;

  let thirdStep = 0;

  for (let i = 2; i <= n; i++) {
    thirdStep = firstStep + secondStep;

    firstStep = secondStep;

    secondStep = thirdStep;
  }
  return thirdStep;
};
