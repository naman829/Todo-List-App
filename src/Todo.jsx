import React from "react";
import { Button } from "@material-ui/core";
import  DeleteIcon  from "@material-ui/icons/Delete";
import db from "./firebase";
import {
  List,
  ListItem,
  ListItemText,
  Avatar,
  ImageIcon,
  ListItemAvatar,
} from "@material-ui/core";
import "./Todo.css";
const Todo = (props) => {
  return (
    <List className="todo">
      <ListItem>
        <h1 className="List">
          {props.todo.todo}{" "}
          <Button
            className="buttn"
            onClick={(event) => {
              db.collection("todos").doc(props.todo.id).delete();
            }}
          >
            <DeleteIcon className="delete_button" />
          </Button>
        </h1>
      </ListItem>
    </List>
  );
};
export default Todo;
