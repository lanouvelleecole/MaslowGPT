# Maslow [![NPM version](https://badge.fury.io/js/maslow.svg)](https://npmjs.org/package/maslow) [![Build Status](https://travis-ci.org/Truemedia/maslow.svg?branch=master)](https://travis-ci.org/Truemedia/maslow)

> High level abstraction of maslow pyramid of needs, for use with AI

## Installation

```sh
$ npm install --save maslow
```

## Usage

```js
const {Maslow} = require('maslow');
let pyramidStage = 'physiological';
let trainingData = [
    {
        "phrase": "cannot breathe",
        "need": "air"
    },
    {
        "phrase": "need to drink",
        "need": "water"
    },
    {
        "phrase": "need to eat",
        "need": "food"
    }
];
let person = new Maslow(pyramidStage, trainingData);
```
See the test.js for example of function calls to the library

## Tests

Run `node test.js`. If you get no errors and see the full scenario text play out then everything is fine.

## License

ISC © [Wade Penistone](https://github.com/Truemedia/maslow)
