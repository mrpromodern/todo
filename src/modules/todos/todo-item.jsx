import { ListItem, ListItemText, IconButton, Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <ListItem
      secondaryAction={
        <>
          <IconButton edge="end" onClick={() => onDelete(todo.id)}>
            <DeleteIcon />
          </IconButton>
        </>
      }
    >
      <Checkbox
        edge="start"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <ListItemText
        primary={todo.text}
        sx={{
          textDecoration: todo.completed ? "line-through" : "none",
          color: todo.completed ? "gray" : "inherit",
        }}
      />
    </ListItem>
  );
}
