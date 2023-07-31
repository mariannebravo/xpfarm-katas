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
- For each item of the arrays mapped, make a sum about it
- Then sum the results

## Pomodoro 1 🍅

[✅] Describe domain