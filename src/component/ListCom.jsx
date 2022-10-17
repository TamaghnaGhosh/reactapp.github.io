import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@mui/icons-material/Edit";
const ListCom = (props) => {
  //   const cutlinefunction = () => {
  //     setcutline(true);
  //   };
  return (
    <>
      <div className="container">
        {/* <div class="row">
          <div class="col-sm-2"> */}
        <div>{props.text}</div>
        {/* </div>
          <div class="row"> */}
        <DeleteIcon
          onClick={() => {
            props.onSelect(props.id);
          }}
        />
        <br />
        <EditIcon
          onClick={() => {
            props.onEditSelect(props.id);
          }}
        />

        {/* </div>
        </div> */}
      </div>
    </>
  );
};

export default ListCom;
