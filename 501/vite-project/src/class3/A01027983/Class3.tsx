import { useState } from "react";
import Class3Example from "./Class3Example.tsx";
import Button from "./components/Button.tsx";
import "./Class3.css"

function Class3() {
  return (
    <>
      <div>
        <h1>Menu</h1>
        <div>
          <Button label="Class1" onClick={() => document.location = "/src/class1/A01027983/"} />
          <Button label="Class2" onClick={() => document.location = "/src/class2/A01027983/"} />
          <Button label="Class3" />
          <Button label="Main Page" onClick={() => document.location= "/"} />
        </div>
      </div>
      <h1>Class 3 Example A01027983</h1>
      <Class3Example />
    </>
  )
}

export default Class3
