// given two strings, find the length of the longest common substring between them

// top down dynamic programming solution
function longestSubstring(s1, s2) {
  const memo = []; // for memoizing (caching) results

  function helper(s1, s2, i, j, memo) {
    memo[i] = memo[i] || [];
    if (memo[i][j] === undefined) {
      if (i === s1.length || j === s2.length) {
        memo[i][j] = 0;
      } else if (s1[i] === s2[j]) {
        memo[i][j] = 1 + helper(s1, s2, i + 1, j + 1, memo);
      } else {
        memo[i][j] = Math.max(
          helper(s1, s2, i + 1, j, memo),
          helper(s1, s2, i, j + 1, memo)
        );
      }
    }
    return memo[i][j]; // return memoized result for s1 index and s2 index
  }

  return helper(s1, s2, 0, 0, memo);
}

// test
let string1 = "aaaa";
let string2 = "aa";
let string3 = "ABAFDAG";
let string4 = "ADBLKJG";
console.log(longestSubstring(string1, string2));
console.log(longestSubstring(string3, string4));
