// Importing the module as a variable
import * as dateUtil from './dateUtil.mjs';

// Testing a leap year
console.log(dateUtil.isLeapYear(2020)); // Should return true

// Testing a non-leap year
console.log(dateUtil.isLeapYear(2021)); // Should return false
