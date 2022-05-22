import store from "./store";
import { Provider } from "react-redux";
import { AddTodoButton } from "./AddTodoButton";
import { TodoListComponent } from "./TodoListComponent";
import { HeaderEditor } from "./HeaderEditor";

export function AppUsingRedux() {
  return (
    <Provider store={store}>
      <HeaderEditor />
      <AddTodoButton />
      <TodoListComponent />
    </Provider>
  );
}
