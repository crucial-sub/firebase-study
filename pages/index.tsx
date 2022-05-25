import { Container } from "@mui/material";
import type { NextPage } from "next";
import TodoList from "../components/TodoList";

const Home: NextPage = () => {
  return (
    <div>
      <Container maxWidth="sm">
        <TodoList />
      </Container>
    </div>
  );
};

export default Home;
