import { useDispatch } from "react-redux";
import { add } from "./mainSlice";

export function AddTodoButton() {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(add())}>Add Todo</button>;
}
