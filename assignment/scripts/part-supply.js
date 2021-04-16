console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40 & console.log the variable
console.log('1. Number of partsNeeded:');
let partsNeeded = 40;
console.log(`The number of partsNeeded are:`, partsNeeded);

// 2. Create a variable call 'supplyChanges' set it to an array containing the following numbers: 3, 5, -6, 0, 7, 11
console.log('2. Array of supplyChanges:');
const supplyChanges = [3, 5, -6, 0, 7, 11];
console.log(`The current supplyChanges array is:`, supplyChanges); // You didn't ask for this, but to keep the pattern of console.logging going.

// 3. Console log the value of 'supplyChanges' at index 2
console.log('3. Item at index 2 is:');
console.log(supplyChanges[2]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges' array & console.log the value removed.
console.log('4. Removed item:');
let removedItem = supplyChanges.pop();
console.log(`The removed item was:`, removedItem);
console.log(`The current supplyChanges array is:`, supplyChanges);

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Adding 25 to supplyChanges.');
supplyChanges.push(25);
console.log(`The current supplyChanges array is:`, supplyChanges);

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.'
//    - if the value is 0, skip it. Do not log it to the console.
//    - if the value is negative, format the log as 'Part count -x.'
console.log('6. Showing supplyChanges with "for" loop');
for (let supplyIndex = 0; supplyIndex < supplyChanges.length; supplyIndex ++) {
  if (supplyChanges[supplyIndex] > 0) {
    console.log("Added " + supplyChanges[supplyIndex] + " parts.");
  } else if (supplyChanges[supplyIndex] < 0) {
    console.log("Part count " + supplyChanges[supplyIndex] + ".");
  }
}

// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop.
console.log('7. Showing supplyChanges with "for of" loop');
for (let supplyIndex of supplyChanges) {
  if (supplyIndex > 0) {
    console.log("Added " + supplyIndex + " parts.");
  } else if (supplyIndex < 0) {
    console.log("Part count " + supplyIndex + ".");
  }
}

// 8. Rewrite the `for` loop from #6 as a `while` loop.
console.log('8. Showing supplyChanges with "while" loop');
let supplyIndex = 0;
while (supplyIndex < supplyChanges.length) {
  if (supplyChanges[supplyIndex] > 0) {
    console.log("Added " + supplyChanges[supplyIndex] + " parts.");
  } else if (supplyChanges[supplyIndex] < 0) {
    console.log("Part count " + supplyChanges[supplyIndex] + ".");
  }
  supplyIndex ++;
}

// 9. Write a loop to determine the total number of parts available by adding up all the numbers in the 'supplyChanges' array.
console.log('9. Total supplies available is:');
let supplyTotal = 0;
for (let i = 0; i < supplyChanges.length; i ++) {
  supplyTotal += supplyChanges[i];
}
console.log(supplyTotal);

console.log("Ryan's Comment: These were hard!  I think I had the most issue with #7 and #8 -- which is funny, because looking back on #6, that's basically the answer for #8.  Anyways, thanks for the practice and reviewing my work! :)");
