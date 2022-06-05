import { IconButton, ListItem, ListItemText } from "@mui/material";
import moment from "moment";
import { TodoType } from "../types/todo";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { MouseEvent, useContext } from "react";
import { TodoContext } from "../pages/TodoContext";

const Todo = ({ id, timestamp, title, detail }: TodoType) => {
  const { showAlert }: any = useContext(TodoContext);
  const deleteTodo = async (
    id: string | undefined,
    e: MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    const docRef = doc(db, "todos", id);
    await deleteDoc(docRef);
    showAlert("error", `Todo with id ${id} deleted successfully`);
  };
  return (
    <ListItem
      onClick={() => setTodo({ id, title, detail })}
      sx={{ mt: 3, boxShadow: 3 }}
      style={{ backgroundColor: "#FAFAFA" }}
      secondaryAction={
        <>
          <IconButton onClick={(e) => deleteTodo(id, e)}>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </>
      }
    >
      <ListItemText
        primary={title}
        secondary={moment(timestamp).format("ddd, DD, MMMM, yyyy")}
      />
    </ListItem>
  );
};

export default Todo;
