# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @shuchita/lotide`

**Require it:**

`const _ = require('@shuchita/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: asserts that two arrays are the same
* `head`: return the first element of an array
* `tail`: returns everything but the first element of an array
* `middle`: returns the middle element(s) of an array
* `assertEqual`: asserts that two primitive values are equal
* `assertObjectsEqual`: asserts that two objects are the same
* `countLetters`: counts the occurences of the letters in a given string
* `countOnly`: counts only the specified items of an array
* `eqArray`: checks if two arrays are the same
* `eqObjects`: checks if two objects are the same
* `findKey`: finds the first key in an object that satisfies a callback function
* `findKeyByValue`: given a value, finds the corresponding key in an object
* `flatten`: flattens nested arrays
* `letterPositions`: returns which indexes each letter in a string appears at
* `map`: creates a new array by calling an input function on every element of an input array
* `takeUntil`: returns the elements of an array starting from the beginning, until an element returns a truthy value for an element
* `without`: returns an array after removing the elements specified
