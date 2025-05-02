import Class5Example from "./Class5Example.tsx";
import Button from "./components/Button.tsx";
import "./Class5.css"

function Class5() {
  return (
    <>
      <div>
        <h1>Menu</h1>
        <div>
          <Button label="Main Page" onClick={() => document.location= "/"} />
          <Button label="Milestone1" onClick={() => document.location = "/src/class1/A01027983/"} />
          <Button label="Class4" onClick={() => document.location = "/src/class4/A01027983_and_A01784875/"} />
          <Button label="Class5" />
          <Button label="Class6" onClick={() => document.location = "/src/class6/A01027983_and_A01784875/"} />
        </div>
      </div>
      <h1>Class 5 Example A01027983 and A01784875</h1>
      <Class5Example />
    </>
  )
}

export default Class5;
