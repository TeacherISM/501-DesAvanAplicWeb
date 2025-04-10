// src/class1/es6/ArrowFunctions.tsx

// Traditional function
function traditionalAdd(a: number, b: number): number {
  return a + b;
}

// Arrow function
const arrowAdd = (a: number, b: number): number => a + b;

// Arrow function with multiple lines
const arrowMultiLine = (a: number, b: number): number => {
  const sum = a + b;
  return sum;
};

// Demonstration of 'this' binding
class Counter {
  count: number = 0;
  
  // Problem with traditional function
  incrementTraditional() {
    setTimeout(function() {
      // @ts-expect-error - Intentionally showing the issue with 'this' binding
      this.count++; // 'this' is not bound to Counter
      // @ts-expect-error - Intentionally showing the issue with 'this' binding
      console.log(this.count); // NaN or error
    }, 100);
  }
  
  // Solution with arrow function
  incrementArrow() {
    setTimeout(() => {
      this.count++; // 'this' is bound to Counter
      console.log(this.count); // works correctly
    }, 100);
  }
}

// Example for the UI
const arrowExample = {
  result: '',
  
  run: () => {
    const traditionalResult = traditionalAdd(5, 3);
    const arrowResult = arrowAdd(5, 3);
    
    // Compare results
    const output = `
      Traditional function: 5 + 3 = ${traditionalResult}
      Arrow function: 5 + 3 = ${arrowResult}
      
      They produce the same result but with different syntax!
    `;
    
    // Force component to update
    arrowExample.result = output;
    
    // Force DOM update by directly manipulating closest result container
    const button = document.activeElement;
    if (button && button instanceof HTMLElement) {
      const resultContainer = button.closest('.example-result');
      if (resultContainer) {
        const resultDiv = resultContainer.querySelector('div');
        if (resultDiv) {
          resultDiv.textContent = output;
        }
      }
    }
    
    return output;
  }
};

export { traditionalAdd, arrowAdd, arrowMultiLine, Counter, arrowExample };