import Class7Example from "./Class7Example.tsx";
import Button from "./components/Button.tsx";
import { UserProvider } from "./components/UserContext.tsx";
import "./Class7.css"

function Class7() {
  return (
    <>
      <div>
        <h1>Menu</h1>
        <div>
          <Button label="Main Page" onClick={() => document.location= "/"} />
          <Button label="Milestone1" onClick={() => document.location = "/src/class1/A01027983/"} />
          <Button label="Milestone2" onClick={() => document.location = "/src/class4/A01027983_and_A01784875/"} />
          <Button label="Class7" />
          <Button label="Class8" onClick={() => document.location = "/src/class8/A01027983_and_A01784875/"} />
        </div>
      </div>
      <h1>Class 7 Example A01027983 and A01784875</h1>
      <UserProvider>
        <Class7Example />
      </UserProvider>
    </>
  )
}

export default Class7;
