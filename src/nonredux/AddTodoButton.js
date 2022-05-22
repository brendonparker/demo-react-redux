import { MainContext } from "./Store";
import { useContext } from "react";

export function AddTodoButton() {
  const { dispatch } = useContext(MainContext);
  return (
    <button onClick={() => dispatch({ type: "ADD_TODO" })}>Add Todo</button>
  );
}
