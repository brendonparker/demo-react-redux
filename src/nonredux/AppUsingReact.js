import { MainContextProvider } from "./Store";
import { AddTodoButton } from "./AddTodoButton";
import { TodoListComponent } from "./TodoListComponent";
import { HeaderEditor } from "./HeaderEditor";

export function AppUsingReact() {
  return (
    <MainContextProvider>
      <HeaderEditor />
      <AddTodoButton />
      <TodoListComponent />
    </MainContextProvider>
  );
}
