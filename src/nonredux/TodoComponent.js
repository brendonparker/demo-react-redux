import { useContext, useRef } from "react";
import { MainContext } from "./Store";

export function TodoComponent({ todo }) {
  const { dispatch } = useContext(MainContext);
  const onChange = (e) => dispatch({ type: "TODO_UPDATE", todo: { ...todo, title: e.target.value } });
  const renderCount = useRef(0);
  renderCount.current++;
  const onRemove = () => dispatch({ type: "TODO_REMOVE", todo });
  return (
    <div>
      <input type="text" value={todo.title} onChange={onChange} />
      <button onClick={onRemove}>Remove</button>
      <i>{renderCount.current}</i>
    </div>
  );
}
