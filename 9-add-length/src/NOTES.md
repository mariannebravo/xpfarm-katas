# Notes

**Labels**  
✅ done  
🚧 WIP  
❌ ERROR  
⚠️ TODO

## KATA Description
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.

## Domain
- Split array by space
  - Get the word + word.length

## Pomodoro 1 🍅

[✅] Describe domain

[✅] Create test: should return 'Test 4' when the word 'Test' is inputed
[✅] Make test pass

[✅] Create test: should return 'Love 4' when the word 'Love' is inputed
[✅] Make test pass

[✅] Create test: should return 'Hello 5' when the word 'Hello' is inputed
[✅] Make test pass

[✅] Create test: should return ['Hello 5', 'guys 4'] when the word 'Hello guys' is inputed
[✅] Make test pass

[✅] Refactor and fix the previous tests