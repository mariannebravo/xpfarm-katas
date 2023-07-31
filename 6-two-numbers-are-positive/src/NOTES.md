# Notes

**Labels**  
✅ done  
🚧 WIP  
❌ ERROR  
⚠️ TODO

## KATA Description
Your job is to write a function, which takes three integers `a`, `b`, and `c` as arguments, and returns `True` if exactly two of of the three integers are positive numbers (greater than zero), and `False` - otherwise.

## **Examples:**

```jsx
twoArePositive(2, 4, -3) == true
twoArePositive(-4, 6, 8) == true
twoArePositive(4, -6, 9) == true
twoArePositive(-4, 6, 0) == false
twoArePositive(4, 6, 10) == false
twoArePositive(-14, -3, -4) == false
```

## Domain
- Verify if two numbers of three given are positive
- if so, return true, else return false
- 0 is a neutral number, so if has (-4, 2, 0) should return false because zero is not positive either negative

## Pomodoro 1 🍅

[✅] Describe domain

[✅] Create test: should return false when the numbers (-1, -1, -1) are inputed 
[✅] Make test pass

[✅] Create test: should return false when the numbers (-1, -1, 2) are inputed