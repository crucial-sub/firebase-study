import {
  collection,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

type Props = {};

interface Todos {
  id: string;
  title?: string;
  timestamp: number;
  detail?: string;
}

const TodoList = (props: Props) => {
  const [todos, setTodos] = useState<Todos[]>([]);

  useEffect(() => {
    const collectionRef = collection(db, "todos");
    console.log("collectionRef: ", collectionRef);

    const q = query(collectionRef, orderBy("timestamp", "desc"));
    console.log("q: ", q);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      console.log("querySnapshot: ", querySnapshot);
      console.log("docs: ", ...querySnapshot.docs);
      console.log("doc.data(): ", querySnapshot.docs[0].data());
      const todosArray = querySnapshot.docs.map(
        (doc: QueryDocumentSnapshot<DocumentData>) => ({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().timestamp?.toDate().getTime(),
        })
      );
      console.log("todosArray: ", ...todosArray);
      setTodos(todosArray);
    });
    return unsubscribe;
  }, []);
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
};

export default TodoList;
