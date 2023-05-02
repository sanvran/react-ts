import { useState } from "react";
import "./App.css";
import Profile from "./components/profile/Profile";
import Todos from "./components/profile/features/todo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {/*  <Profile name="Sanjeev Ranjan" age={24} status="CEO" address="DL">
          <h2>Children</h2>
        </Profile> */}
        <Todos />
      </div>
    </div>
  );
}

export default App;
