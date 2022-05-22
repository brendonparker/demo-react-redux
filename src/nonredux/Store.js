import React, { useReducer } from "react";
export const MainContext = React.createContext();

function mainReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, { id: +new Date(), title: "" }],
      };
    case "TODO_UPDATE": {
      const todos = state.todos.map((x) => {
        if (x.id === action.todo.id) {
          return {
            ...x,
            ...action.todo,
          };
        }
        return x;
      });
      return {
        ...state,
        todos,
      };
    }
    case "TODO_REMOVE": {
      const todos = state.todos.filter((x) => {
        return x.id !== action.todo.id;
      });
      return {
        ...state,
        todos,
      };
    }
    case "HEADER_UPDATE": {
      return {
        ...state,
        header: action.header,
      };
    }
    default:
      break;
  }
  return state;
}

export function MainContextProvider({ children }) {
  const [state, dispatch] = useReducer(mainReducer, { todos: [], header: [] });
  return (
    <MainContext.Provider value={{ state, dispatch }}>
      {children}
    </MainContext.Provider>
  );
}
