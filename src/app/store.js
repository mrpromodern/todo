import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../modules/todos/todos.slice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
