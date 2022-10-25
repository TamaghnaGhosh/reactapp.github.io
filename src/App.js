import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import { Covid } from "./component/covid";
// import { Tempapp } from "../src/component/Tempapp";
import DenseAppBar from "./component/appBar";
import Main from "./component/todoList";
// import App1 from "./component/useReducer";
// import Form from "./component/Form";

export default function App() {
  return (
    <>
      {/* <Form /> */}
      <div>
        <DenseAppBar />
        <br />
        <Main />
        {/* <App1 /> */}
        {/* <Tempapp /> */}
        {/* <Covid /> */}
      </div>
    </>
  );
}
