import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos, toggleTodo, deleteTodo } from "./todos.slice";
import { List, CircularProgress, Typography } from "@mui/material";
import { TodoItem } from "./todo-item";

export function Todos() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  if (status === "loading") return <CircularProgress />;
  if (status === "failed")
    return <Typography color="error">Ошибка загрузки: {error}</Typography>;
  if (!items.length) return <Typography>Нет задач.</Typography>;

  return (
    <List>
      {items.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={handleDelete}
          onToggle={handleToggle}
        />
      ))}
    </List>
  );
}
