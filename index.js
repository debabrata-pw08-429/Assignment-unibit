function main() {
  let arr = [1, 3, 2, 2, -4, -6, -2, 8];
  let target = 4;

  // Find pairs that sum up to the target value
  let pairs = findPairs(arr, target);

  // Merge and sort the pairs
  let mergedArray = mergePairs(pairs);
  mergedArray.sort((a, b) => a - b);

  // Print the results
  process.stdout.write(`First Combination For ${target}: `);
  printArrayPairs(pairs);

  process.stdout.write("\n");

  process.stdout.write("Merge Into a single Array: ");
  printArray(mergedArray);
}

// Find pairs that sum up to the target value
function findPairs(arr, target) {
  let complements = new Map();
  let pairs = [];

  for (let num of arr) {
    let complement = target - num;
    if (complements.has(complement)) {
      pairs.push([complement, num]);
    }
    complements.set(num, true);
  }

  return pairs;
}

// Merge and sort the pairs
function mergePairs(pairs) {
  let mergedList = [];

  for (let pair of pairs) {
    for (let num of pair) {
      mergedList.push(num);
    }
  }

  return mergedList;
}

// Helper method to print pairs
function printArrayPairs(pairs) {
  process.stdout.write("[");
  for (let i = 0; i < pairs.length - 1; i++) {
    process.stdout.write(`[${pairs[i]}],`);
  }
  process.stdout.write(`[${pairs[pairs.length - 1]}]`);
  process.stdout.write("]");
}

// Helper method to print an array
function printArray(arr) {
  console.log(arr);
}

main();
