import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
const ListCom = (props) => {
  //   const cutlinefunction = () => {
  //     setcutline(true);
  //   };
  return (
    <>
      <div class="container">
        {/* <div class="row">
          <div class="col-sm-2"> */}
        <li>{props.text}</li>
        {/* </div>
          <div class="row"> */}
        <DeleteIcon
          onClick={() => {
            props.onSelect(props.id);
          }}
        />
        {/* </div>
        </div> */}
      </div>
    </>
  );
};

export default ListCom;
