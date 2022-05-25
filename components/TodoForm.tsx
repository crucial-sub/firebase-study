import { Button, TextField } from "@mui/material";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase";
import { TodoType } from "../types/todo";

const TodoForm = () => {
  const [todo, setTodo] = useState<TodoType>({ title: "", detail: "" });
  const onSubmit = async () => {
    const collectionRef = collection(db, "todos");
    const docRef = await addDoc(collectionRef, {
      ...todo,
      timestamp: serverTimestamp(),
    });
    console.log("newTodo: ", todo, collectionRef, docRef);
    setTodo({ title: "", detail: "" });
    alert(`Todo with id ${docRef.id} is added successfully`);
  };
  return (
    <div>
      <pre>{JSON.stringify(todo)}</pre>
      <TextField
        fullWidth
        label="title"
        margin="normal"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <TextField
        fullWidth
        label="detail"
        multiline
        maxRows={4}
        value={todo.detail}
        onChange={(e) => setTodo({ ...todo, detail: e.target.value })}
      />
      <Button sx={{ mt: 3 }} onClick={onSubmit}>
        Add a new todo
      </Button>
    </div>
  );
};

export default TodoForm;
