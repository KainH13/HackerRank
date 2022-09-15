// return true if 0^n1^n format otherwise false

// option 1 -- no built in string methods
function formatTest(string) {
  let zeroCount = 0;
  let oneCount = 0;

  // 2 pointers
  let left = 0;
  let right = 1;
  while (right < string.length) {
    // check for boundary between characters being broken
    if (string[left] === "1" && string[right] === "0") {
      return false;
    }
    // increment value counts
    if (left === 0) {
      zeroCount += 1;
    }
    if (string[right] === "0") {
      zeroCount += 1;
    } else {
      oneCount += 1;
    }

    // increment pointers
    left += 1;
    right += 1;
  }

  // check that both values are present n times
  if (zeroCount === oneCount) {
    return true;
  } else {
    return false;
  }
}

// test 1
testPositive = "000111";
testNegative = "0001111";
testNegative2 = "001011";
console.log(formatTest(testPositive));
console.log(formatTest(testNegative));
console.log(formatTest(testNegative2));

// option 2 -- built in split method
function formatTest2(string) {
  let splitResult = string.split("01");

  if (splitResult.length > 2) {
    return false;
  }
  if (splitResult[0].length === splitResult[1].length) {
    return true;
  } else {
    return false;
  }
}

// test 2
testPositive = "000111";
testNegative = "0001111";
testNegative2 = "001011";
console.log(formatTest2(testPositive));
console.log(formatTest2(testNegative));
console.log(formatTest2(testNegative2));
