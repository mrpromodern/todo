import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await axios.get("/api/todos");
  return response.data;
});

export const toggleTodo = createAsyncThunk("todos/toggleTodo", async (id) => {
  const response = await axios.patch(`/api/todos/${id}/toggle`);
  return response.data;
});

export const addTodo = createAsyncThunk("todos/addTodo", async (text) => {
  const response = await axios.post("/api/todos", { text });
  return response.data;
});

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
  await axios.delete(`/api/todos/${id}`);
  return id;
});

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const updated = action.payload;
        const index = state.items.findIndex((t) => t.id === updated.id);
        if (index !== -1) {
          state.items[index] = updated;
        }
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter((todo) => todo.id !== action.payload);
      });
  },
});

export default todosSlice.reducer;
