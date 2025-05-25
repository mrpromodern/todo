import { Container, Typography } from "@mui/material";
import { Todos } from "./modules/todos/todos";
import { AddTodo } from "./modules/todos/todo-add";

export default function App() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Список задач
      </Typography>
      <AddTodo />
      <Todos />
    </Container>
  );
}
