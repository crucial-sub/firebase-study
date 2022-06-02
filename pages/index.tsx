import { Alert, Container, Snackbar } from "@mui/material";
import type { NextPage } from "next";
import React, { SetStateAction, useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { TodoContext } from "./TodoContext";

const Home: NextPage = () => {
  const [open, setOpen] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const showAlert = (
    type: React.SetStateAction<string>,
    msg: React.SetStateAction<string>
  ) => {
    setAlertType(type);
    setAlertMessage(msg);
    setOpen(true);
  };
  const handleClose = (
    e: React.SyntheticEvent<any> | Event,
    reason: string
  ) => {
    console.log("ddddddd", e, reason);
    if (reason === "clickaway") return;
  };

  return (
    <div>
      <TodoContext.Provider value={{ showAlert }}>
        <Container maxWidth="sm">
          <TodoForm />
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity={alertType}
              sx={{ width: "100%" }}
            >
              {alertMessage}
            </Alert>
          </Snackbar>
          <TodoList />
        </Container>
      </TodoContext.Provider>
    </div>
  );
};

export default Home;
