import Class8Example from "./Class8Example.tsx";
import Button from "./components/Button.tsx";
import { UserProvider } from "./components/UserContext.tsx";
import "./Class8.css"

function Class8() {
  return (
    <>
      <div>
        <h1>Menu</h1>
        <div>
          <Button label="Main Page" onClick={() => document.location= "/"} />
          <Button label="Milestone1" onClick={() => document.location = "/src/class1/A01027983/"} />
          <Button label="Milestone2" onClick={() => document.location = "/src/class4/A01027983_and_A01784875/"} />
          <Button label="Class7" onClick={() => document.location = "/src/class7/A01027983_and_A01784875/"} />
          <Button label="Class8" />
        </div>
      </div>
      <h1>Class 8 Example A01027983 and A01784875</h1>
      <UserProvider>
        <Class8Example />
      </UserProvider>
    </>
  )
}

export default Class8;
