import Class4Example from "./Class4Example.tsx";
import Button from "./components/Button.tsx";
import "./Class4.css"

function Class4() {
  return (
    <>
      <div>
        <h1>Menu</h1>
        <div>
          <Button label="Class1" onClick={() => document.location = "/src/class1/A01027983/"} />
          <Button label="Class2" onClick={() => document.location = "/src/class2/A01027983/"} />
          <Button label="Class3" onClick={() => document.location = "/src/class3/A01027983/"} />
          <Button label="Milestone2" />
          <Button label="Main Page" onClick={() => document.location= "/"} />
        </div>
      </div>
      <h1>Class 4 Example A01027983 and A01784875</h1>
      <Class4Example />
    </>
  )
}

export default Class4
