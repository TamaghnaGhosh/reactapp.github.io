import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import React, { useState } from "react";
// import DeleteIcon from "@material-ui/icons/Delete";
import ListCom from "./ListCom";
import "./todoList.css";

const Main = () => {
  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState([]);

  const firstEvent = (event) => {
    setItem(event.target.value);
  };

  const secondEvent = () => {
    setNewItem((prev) => {
      return [...prev, item];
    });

    setItem("");
  };

  const thirdEvent = (id) => {
    // setNewItem([]);

    setNewItem((oldItems) => {
      return oldItems.filter((arrEle, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <br />
      <br />
      <div className="childOne">
        <input
          type="text"
          value={item}
          placeholder="Add a task"
          onChange={firstEvent}
        />
        <Button className="AddBtn" onClick={secondEvent}>
          <AddIcon />
        </Button>
        <br />
        <br />
        <ul className="textFont">
          {newItem.map((val, index) => {
            return (
              <ListCom
                key={index}
                id={index}
                text={val}
                onSelect={thirdEvent}
              />
            );
          })}
        </ul>
      </div>
      <br />
      <br />
      {/* <div className="childTwo">
        <Button className="delBtn" onClick={thirdEvent}>
          <DeleteIcon />
          Delete All
        </Button>
      </div> */}
    </div>
  );
};

export default Main;
