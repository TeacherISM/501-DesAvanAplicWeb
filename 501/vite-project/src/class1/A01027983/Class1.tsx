import { useState } from "react";
import Class1Example from "./Class1Example.tsx";
import Button from "./components/Button.tsx";
import "./Class1.css"

function Class1() {
  return (
    <>
      <div>
        <h1>Menu</h1>
        <div>
          <Button label="Main Page" onClick={() => document.location= "/"} />
          <Button label="Class1" />
          <Button label="Class2" onClick={() => document.location = "/src/class2/A01027983/"} />
          <Button label="Class3" onClick={() => document.location = "/src/class3/A01027983/"} />
          <Button label="Milestone2" onClick={() => document.location = "/src/class4/A01027983_and_A01784875/"} />
          <Button label="Milestone3" onClick={() => document.location = "/src/class7/A01027983_and_A01784875/"} />
        </div>
      </div>
      <h1>Class 1 Example A01027983</h1>
      <p>
        This example shows the use of arrow functions with destructuring
        for parsing the different attributes of the defined components
        which also apply useState() hooks.
      </p>
      <Class1Example />
    </>
  )
}

export default Class1
