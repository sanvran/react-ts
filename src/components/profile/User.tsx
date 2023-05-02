import React, { useContext } from "react";
import { UserContext } from "../../App";

const User = () => {
  const { state, dispatch } = useContext(UserContext);
  return (
    <div>
      <h2>Name: {state.name} </h2>
      <h2>Age: {state.age} </h2>
      <button
        onClick={() =>
          dispatch({ type: "CHANGE_NAME", payload: "Sanjeev Ranajan" })
        }
      >
        Update Name
      </button>
    </div>
  );
};

export default User;
