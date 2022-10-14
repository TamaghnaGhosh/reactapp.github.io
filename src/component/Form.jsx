import React, { useState } from "react";
// import "../component/css/form.css";
const Form = () => {
  const [fullName, setfullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setfullName((pre) => {
      console.log(pre);
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  const onSubmits = (e) => {
    e.preventDefault();
    alert("form succesfully submitted");
  };
  return (
    <>
      <div className="form">
        <form onSubmit={onSubmits}>
          <div>
            <h1>
              {fullName.fname}
              <br></br>
              {fullName.lname}
              <br></br>
              {fullName.email}
              <br></br>
              {fullName.phone}
            </h1>
            <input
              type="text"
              placeholder="Enter your Name"
              name="fname"
              onChange={inputEvent}
              value={fullName.fname}
            />
            <br />
            <br />
            <br />
            <br />
            <input
              type="text"
              placeholder="Enter your Name"
              name="lname"
              onChange={inputEvent}
              value={fullName.lname}
            />
            <br />
            <br />
            <br />
            <br />
            <input
              type="email"
              placeholder="Enter your Name"
              name="email"
              onChange={inputEvent}
              value={fullName.email}
            />
            <br />
            <br />
            <br />
            <br />
            <input
              type="number"
              placeholder="Enter your Name"
              name="phone"
              onChange={inputEvent}
              value={fullName.phone}
            />
            <br />
            <br />
            <br />
            <br />
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
