import { createContext, useReducer, useState } from "react";
import "./App.css";
import Profile from "./components/profile/Profile";
import Todos from "./app/features/todo";
import { actionType, initialState, reducer } from "./reducer";
import User from "./components/profile/User";

type contextType = {
  state: typeof initialState;
  dispatch: React.Dispatch<actionType>;
};

export const UserContext = createContext({} as contextType);

function App() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          {/*  <Profile name="Sanjeev Ranjan" age={24} status="CEO" address="DL">
          <h2>Children</h2>
        </Profile> */}
          <hr />
          <Todos />
          <hr />
          <User />
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
