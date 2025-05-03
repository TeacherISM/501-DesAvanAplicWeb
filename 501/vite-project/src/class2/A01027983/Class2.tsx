import { useState } from "react";
import Class2Example from "./Class2Example.tsx";
import Button from "./components/Button.tsx";
import "./Class2.css"

function Class2() {
  return (
    <>
      <div>
        <h1>Menu</h1>
        <div>
          <Button label="Main Page" onClick={() => document.location= "/"} />
          <Button label="Class1" onClick={() => document.location = "/src/class1/A01027983/"} />
          <Button label="Class2" />
          <Button label="Class3" onClick={() => document.location = "/src/class3/A01027983/"} />
          <Button label="Milestone2" onClick={() => document.location = "/src/class4/A01027983_and_A01784875/"} />
          <Button label="Milestone3" onClick={() => document.location = "/src/class7/A01027983_and_A01784875/"} />
        </div>
      </div>
      <h1>Class 2 Example A01027983</h1>
      <Class2Example />
    </>
  )
}

export default Class2
