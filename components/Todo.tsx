import { ListItem, ListItemText } from "@mui/material";
import moment from "moment";
import { TodoType } from "../types/todo";

const Todo = ({ id, timestamp, title, detail }: TodoType) => {
  return (
    <ListItem
      sx={{ mt: 3, boxShadow: 3 }}
      style={{ backgroundColor: "#FAFAFA" }}
    >
      <ListItemText
        primary={title}
        secondary={moment(timestamp).format("ddd, DD, MMMM, yyyy")}
      />
    </ListItem>
  );
};

export default Todo;
