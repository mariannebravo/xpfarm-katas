# Notes

**Labels**  
✅ done  
🚧 WIP  
❌ ERROR  
⚠️ TODO

## KATA Description
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example:

 month 2 (February), is part of the first quarter; 

month 6 (June), is part of the second quarter; 

and month 11 (November), is part of the fourth quarter.

Constraint:

- `1 <= month <= 12`

## Domain
- Verify if the month given is valid
- Return the num + quarter 

## Pomodoro 1 🍅

[✅] Describe domain

[✅] Create test: verify if the number given is a valid month
[✅] Make test pass
[✅] Refactor test name for: should return false when the month 0 is given

[✅] Create test: should return true when the month 2 is given
[✅] Make test pass

[✅] Create test: should return true when the month 6 is given
[✅] Make test pass

[✅] Create test: should return false when the month 13 is given
[✅] Make test pass

[✅] Create test: should return "1st Quarter" when the month 1 is given
[✅] Make test pass
[✅] Refactor: put a 'it'

[✅] Create test: should return "2nd Quarter" when the month 4 is given
[✅] Make test pass

[✅] Create test: should "3rd Quarter" when the month 8 is given
[✅] Make test pass

[✅] Create test: should "4th Quarter" when the month 11 is given
[✅] Make test pass

## Pomodoro 2 🍅
[✅] Fix uncovered lines