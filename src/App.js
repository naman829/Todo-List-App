import React, { useEffect, useState } from "react";
import firebase from "firebase";
import { Button } from "@material-ui/core";
import db from "./firebase";
import {
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
} from "@material-ui/core";
import Todo from "./Todo";
import "./App.css";
const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const addToDo = (event) => {
    event.preventDefault();
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);
  return (
    <>
      <div className="App">
        <h1>
          Hello Clever Programmers!!! <span>🚀🚀🚀</span>
        </h1>
        <form>
          <FormControl>
            <InputLabel htmlFor="my-input">Write your Todo</InputLabel>
            <Input
              value={input}
              onChange={(event) => {
                setInput(event.target.value);
              }}
            />
            <FormHelperText id="my-helper-text">
              We'll never share your list with anyone else
            </FormHelperText>
            <Button
              className="my-3"
              onClick={addToDo}
              disabled={!input}
              type="submit"
              variant="contained"
              color="primary"
            >
              Add Item
            </Button>
          </FormControl>
        </form>
      </div>
      <ul>
        {todos.map((todo) => {
          return <Todo todo={todo} />;
        })}
      </ul>
    </>
  );
};
export default App;
