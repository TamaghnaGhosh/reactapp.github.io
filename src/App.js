import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import { Covid } from "./component/covid";
import { Tempapp } from "../src/component/Tempapp";
// import DenseAppBar from "./component/appBar";
// import Main from "./component/todoList";
// import Form from "./component/Form";

export default function App() {
  return (
    <>
      {/* <Form /> */}
      <div>
        {/* <DenseAppBar />
        <br />
        <Main /> */}
        <Tempapp />
        {/* <Covid /> */}
      </div>
    </>
  );
}
