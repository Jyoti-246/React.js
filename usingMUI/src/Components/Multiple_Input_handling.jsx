import React from "react";
import { useState } from "react";

const Multiple_Input_handling = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    alert("your form has been submitted");

    console.log(formData);

    setFormData({
      name: "",
      email: "",
      password: "",
      age: "",
      phone: "",
    });
  };
  return (
    <div>
      <>
        <form onSubmit={submitHandler}>
          <div>
            Name :-{" "}
            <input
              value={formData.name}
              name="name"
              onChange={onChangeHandler}
              type="text"
            />
          </div>
          <div>
            Email :-{" "}
            <input
              value={formData.email}
              name="email"
              onChange={onChangeHandler}
              type="email"
            />
          </div>
          <div>
            Password :-{" "}
            <input
              value={formData.password}
              name="password"
              onChange={onChangeHandler}
              type="password"
            />
          </div>
          <div>
            Age :-{" "}
            <input
              value={formData.age}
              name="age"
              onChange={onChangeHandler}
              type="number"
            />
          </div>
          <div>
            Phone :-{" "}
            <input
              value={formData.phone}
              name="phone"
              onChange={onChangeHandler}
              type="number"
            />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </>
    </div>
  );
};

export default Multiple_Input_handling;
