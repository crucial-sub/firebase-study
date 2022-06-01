import { IconButton, ListItem, ListItemText } from "@mui/material";
import moment from "moment";
import { TodoType } from "../types/todo";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

const Todo = ({ id, timestamp, title, detail }: TodoType) => {
  const deleteTodo = async (id, e) => {
    e.stopPropagation();
    const docRef = doc(db, "todo", id);
    await deleteDoc(docRef);
    showAlert("error", `Todo with id ${id} deleted successfully`);
  };
  return (
    <ListItem
      sx={{ mt: 3, boxShadow: 3 }}
      style={{ backgroundColor: "#FAFAFA" }}
      secondaryAction={
        <>
          <IconButton>
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
