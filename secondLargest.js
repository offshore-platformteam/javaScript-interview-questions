function findSecondLargest(arr) {
  let largest = arr[0];
  let secondLargest = -Infinity;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
// Example usage:
const array = [5, 2, 10, 8, 3];
const secondLargest = findSecondLargest(array);
console.log("Second largest element:", secondLargest);
