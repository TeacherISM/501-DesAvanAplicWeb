import Class6Example from "./Class6Example.tsx";
import Button from "./components/Button.tsx";
import "./Class6.css"

function Class6() {
  return (
    <>
      <div>
        <h1>Menu</h1>
        <div>
          <Button label="Main Page" onClick={() => document.location= "/"} />
          <Button label="Milestone1" onClick={() => document.location = "/src/class1/A01027983/"} />
          <Button label="Class4" onClick={() => document.location = "/src/class4/A01027983_and_A01784875/"} />
          <Button label="Class5" onClick={() => document.location = "/src/class5/A01027983_and_A01784875/"} />
          <Button label="Class6" />
        </div>
      </div>
      <h1>Class 6 Example A01027983 and A01784875</h1>
      <Class6Example />
    </>
  )
}

export default Class6;
