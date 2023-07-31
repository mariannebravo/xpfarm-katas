# Notes

**Labels**  
✅ done  
🚧 WIP  
❌ ERROR  
⚠️ TODO

## KATA Description
Create a function that receives a (square) matrix and calculates the sum of both diagonals (main and secondary)

> Matrix = array of n length whose elements are n length arrays of integers.
> 

3x3 example:

```jsx
diagonals([
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
]);

returns -> 30 // 1 + 5 + 9 + 3 + 5 + 7
```

## Domain
- Map the array of arrays
- For each item of the diagonal line arrays mapped, make a sum about it
- Then sum the results
  arr0[0] + arr1[1] + arr2[2]
  arr0[2] + arr1[1] + arr2[0]

## Pomodoro 1 🍅

[✅] Describe domain

[✅] Create test: return the sum of a single array [1, 1, 1]
[✅] Make test pass

[✅] Refactor of it description

[✅] Create test: return the sum of a single array [2, 2, 2]
[✅] Make test pass

[✅] Create test: return the sum of a single array [3, 3, 3]
[✅] Make test pass

[✅] Create test: return the sum of the diagonal inputed [[1, 1, 1], [1, 1, 1], [1, 1, 1]]
[✅] Make test pass

[✅] Create test: return the sum of the diagonal inputed [[2, 2, 2], [2, 2, 2], [2, 2, 2]]
[✅] Make test pass

// paused the pomodoro to check an external problem

[✅] Create test: return the sum of the diagonal inputed [[ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ]]

[✅] Refactor test result after the better understanding of the KATA

[✅] Refactor prod code deleting the unused function and deleting the unused tests.