import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@mui/icons-material/Edit";
import React, { useState, useEffect } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import ListCom from "./ListCom";
import "./todoList.css";
const getLocalItem = () => {
  let list = localStorage.getItem("List");
  console.log(list);

  if (list) {
    return JSON.parse(localStorage.getItem("List"));
  } else {
    return [];
  }
};

const Main = () => {
  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState(getLocalItem());
  const [toggle, setToggle] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  useEffect(() => {
    localStorage.setItem("List", JSON.stringify(newItem));
  }, [newItem]);

  // const firstEvent = (event) => {
  //   setItem(event.target.value);
  // };

  // const firstEvent = () => {
  //   setNewItem((prev) => {
  //     return [...prev, item];
  //   });setItem("");
  // };

  const edit = (id) => {
    const neEditId = newItem.find((elem) => {
      return elem.id === id;
    });
    console.log(neEditId);
    setToggle(false);
    setItem(neEditId.name);
    setIsEditItem(id);
  };

  const firstEvent = () => {
    if (!item) {
      alert("plz fill the data");
    } else if (item && !toggle) {
      setNewItem(
        newItem.map((elem) => {
          if (elem.id === isEditItem) {
            return { ...elem, name: item };
          }
          return elem;
        })
      );
      setToggle(true);
      setItem("");
      setIsEditItem(null);
    } else {
      const allInputDatas = { id: new Date().getTime().toString(), name: item };
      setNewItem([...newItem, allInputDatas]);
      setItem("");
    }
  };

  const thirdEventS = () => {
    setNewItem([]);
  };
  const thirdEvent = (id) => {
    setNewItem((oldItems) => {
      return oldItems.filter((arrEle) => {
        return id !== arrEle.id;
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
          onChange={(event) => {
            setItem(event.target.value);
          }}
        />
        {toggle ? (
          <Button className="AddBtn" onClick={firstEvent}>
            <AddIcon />
          </Button>
        ) : (
          <Button className="AddBtn" onClick={firstEvent}>
            <EditIcon />
          </Button>
        )}
        <br />
        <br />
        <div className="textFont">
          {newItem.map((val, index) => {
            return (
              <ListCom
                key={val.id}
                id={val.id}
                text={val.name}
                onSelect={() => {
                  thirdEvent(val.id);
                }}
                onEditSelect={() => {
                  edit(val.id);
                }}
              />
            );
          })}
        </div>
      </div>
      <br />
      <br />
      <div className="childTwo">
        <Button className="delBtn" onClick={thirdEventS}>
          <DeleteIcon />
          Delete All
        </Button>
      </div>
    </div>
  );
};

export default Main;
