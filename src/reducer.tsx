export const initialState = {
  name: "Sanjeev",
  age: 23,
  address: "Dl",
};

export type actionType =
  | {
      type: "CHANGE_NAME";
      payload: string;
    }
  | {
      type: "UPDATE_AGE";
      payload: number;
    };

export const reducer = (state: typeof initialState, action: actionType) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.payload };
    case "UPDATE_AGE":
      return { ...state, age: action.payload };
    default:
      return state;
  }
};
