// src/A01781041/Clase1/demos/utils/mathUtils.ts

// Named exports
export const add = (a: number, b: number): number => a + b;

export const subtract = (a: number, b: number): number => a - b;

export const multiply = (a: number, b: number): number => a * b;

export const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
};

// Private function (not exported)
const square = (x: number): number => x * x;

// Helper function that uses the private function
export const calculateArea = (radius: number): number => {
  return Math.PI * square(radius);
};

// Default export
const mathUtils = {
  add,
  subtract,
  multiply,
  divide,
  calculateArea,
};

export default mathUtils;