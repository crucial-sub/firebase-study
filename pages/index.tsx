import { Container } from "@mui/material";
import type { NextPage } from "next";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const Home: NextPage = () => {
  return (
    <div>
      <Container maxWidth="sm">
        <TodoForm />
        <TodoList />
      </Container>
    </div>
  );
};

export default Home;
