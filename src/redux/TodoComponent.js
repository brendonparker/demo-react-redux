import { useRef } from "react";
import { useDispatch } from "react-redux";
import { update, remove } from "./mainSlice";

export function TodoComponent({ todo }) {
  const dispatch = useDispatch();
  const onChange = (e) =>
    dispatch(update({ id: todo.id, title: e.target.value }));
  const renderCount = useRef(0);
  renderCount.current++;
  return (
    <div>
      <input type="text" value={todo.title} onChange={onChange} />
      <button onClick={() => dispatch(remove())}>Remove</button>
      <i>{renderCount.current}</i>
    </div>
  );
}
