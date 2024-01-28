# Math-All

## Examples

Here are some examples of using the `MathAll.round` function:

```javascript
// Rounding to the nearest integer
const result1 = MathAll.round(14321.12345, 0); // Output: 14321

// Rounding to the nearest ten
const result2 = MathAll.round(14321.12345, 1); // Output: 14320

// Rounding to the second decimal place
const result3 = MathAll.round(14321.12344, -2); // Output: 14321.12
```

## Overview

The `math-all` library provides an extended rounding solution in JavaScript, inspired by the familiar `Math.round` function. The library allows for precise rounding not only of decimal places but also for various significant digits, enhancing the flexibility of numeric rounding operations.

## Installation

To install the `math-all` library, you can use the following npm command:

```bash
npm install math-all
```

## Usage

Here is a basic example of using the `MathAll.round` function:

```javascript
import { MathAll } from "math-all";
```

or

```javascript
const { MathAll } = require("math-all");
```

```javascript
// Example usage
const roundedValue = MathAll.round(14321.12345, -5);
console.log(roundedValue); // Output: 14321.12345
```

## Features

### 1. Multi-Precision Rounding

The `math-all` library allows rounding not only for decimal places but also for various significant digits, providing a versatile solution for precise numeric rounding.

### 2. Familiar Interface

Designed with a similar interface to the built-in `Math.round` function, users can seamlessly integrate the `MathAll.round` function into their JavaScript applications.

### 3. Enhanced Precision Handling

The library includes enhanced precision handling to address potential issues associated with precision when using standard rounding formulas.

## How It Works

The core rounding formula used by the `math-all` library is:

```javascript
Math.round(copiedTarget / 10 ** digit) * 10 ** digit;
```

This formula ensures accurate rounding based on the specified digit.
