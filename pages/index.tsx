import { Container } from "@mui/material";
import type { NextPage } from "next";
import TodoList from "../components/TodoList";

const Home: NextPage = () => {
  return (
    <div>
      <Container>
        <TodoList />
      </Container>
    </div>
  );
};

export default Home;
