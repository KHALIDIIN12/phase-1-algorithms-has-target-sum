
function hasTargetSum(array, target) {
  const seen = new Set();

  for (const num of array) {
    const complement = target - num;
    if (seen.has(complement)) return true;
    seen.add(num);
  }

  return false;
}



if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true  (pair is 5 & 5)");
  console.log("=>", hasTargetSum([5, 5, 3], 10));

  console.log("Expecting: false (empty array)");
  console.log("=>", hasTargetSum([], 4));
}


module.exports = hasTargetSum;