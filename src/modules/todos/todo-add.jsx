import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todos.slice";
import { TextField, Button, Box } from "@mui/material";

export function AddTodo() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    dispatch(addTodo(text));
    setText("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", gap: 2, mb: 4 }}
    >
      <TextField
        fullWidth
        label="Новая задача"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="submit" variant="contained">
        Добавить
      </Button>
    </Box>
  );
}
