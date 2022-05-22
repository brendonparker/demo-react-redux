import { useContext } from "react";
import { MainContext } from "./Store";
import { TodoComponent } from "./TodoComponent";

export function TodoListComponent() {
  const { state } = useContext(MainContext);
  return (
    <>
      {state.todos.map((todo) => (
        <TodoComponent key={todo.id} todo={todo} />
      ))}
    </>
  );
}
