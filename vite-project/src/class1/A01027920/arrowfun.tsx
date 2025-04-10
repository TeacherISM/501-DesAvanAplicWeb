import React from 'react';

const ArrowFunctionDemo: React.FC = () => {
  // Traditional function with `this` issue
  const obj = {
    name: "Alice",
    greet: () => { // Changed to arrow function
      setTimeout(() => {
        console.log(`Hello, ${obj.name}!`); // `this` is not used
      }, 1000);
    }
  };

  // Arrow function fixing `this`
  const objFixed = {
    name: "Alice",
    greet: function() {
      setTimeout(() => {
        console.log(`Hello, ${this.name}!`); // `this` refers to `objFixed`
      }, 1000);
    }
  };

  const handleTraditionalGreet = () => {
    console.log("Calling traditional greet:");
    obj.greet();
  };

  const handleArrowGreet = () => {
    console.log("Calling arrow function greet:");
    objFixed.greet();
  };

  return (
    <div>
      <h1>Arrow Function vs Traditional Function</h1>
      <button onClick={handleTraditionalGreet}>
        Call Traditional Greet
      </button>
      <button onClick={handleArrowGreet}>
        Call Arrow Function Greet
      </button>
    </div>
  );
};

export default ArrowFunctionDemo;
