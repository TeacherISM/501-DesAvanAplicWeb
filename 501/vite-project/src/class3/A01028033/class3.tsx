// Script with the class3 activities and components
import Counter from "./components/counterUseState";
import Posts from "./components/posts";
import CounterWithReducer from "./components/reducerExample";
import "/src/A01028033/styles.css";

const App: React.FC = () => {
  return (
    <div id="root">
      <h1>Class 3 (Hooks)</h1>

      <section style={{ marginBottom: "40px" }}>
        <h2>1. useState Example</h2>
        <Counter />
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2>2. useEffect Example (Data Fetching)</h2>
        <p>Fetching data from the mockAPI JSONPlaceholder.</p>
        <Posts />
      </section>

      <section>
        <h2>3. useReducer Example</h2>
        <CounterWithReducer />
      </section>
      <a href="/public/A01028033/menu/milestoneMenu.html">
        <button>Back to menu</button>
      </a>
    </div>
  );
};

export default App;
