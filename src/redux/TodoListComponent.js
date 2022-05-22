import { useSelector } from "react-redux";
import { TodoComponent } from "./TodoComponent";

export function TodoListComponent() {
  const todos = useSelector((state) => state.main.todos);
  return (
    <>
      {todos.map((todo) => (
        <TodoComponent key={todo.id} todo={todo} />
      ))}
    </>
  );
}
