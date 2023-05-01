import React, { useState } from "react";
import "./App.css";
import { Formik } from "formik";

const App = () => {
  // bien regex
  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };
  // hook useState
  const [form, setForm] = useState({});
  // handleChange
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleValidate = (e) => {
    const errors = {};
    // validsate name

    if (!form.name) {
      errors.name = "required";
    }
    // validate email

    if (!form.email) {
      errors.email = "Required";
    } else if (!REGEX.email.test(form.email)) {
      errors.email = "Invalid email, please try again";
      console.log("code");
    }

    //validate phone

    if (!form.phone) {
      errors.phone = "Required";
    }

    return errors;
  };

  const handleSubmit = () => {
    alert("Submit form successfully!!");
  };

  return (
    <>
      <h2>Contact Form</h2>
      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ errors, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div
              className={`custom-input ${
                errors.name ? "custom-input-error" : ""
              }`}
            >
              <label htmlFor="">Name</label>
              <input
                type="text"
                name="name"
                value={form.name || ""}
                onChange={handleChange}
              />
              <p className="errors">{errors.name}</p>
            </div>
            <div
              className={`custom-input ${
                errors.email ? "custom-input-error" : ""
              }`}
            >
              <label htmlFor="">Email</label>
              <input
                type="email"
                name="email"
                value={form.email || ""}
                onChange={handleChange}
              />
              <p className="errors">{errors.email}</p>
            </div>
            <div
              className={`custom-input ${
                errors.phone ? "custom-input-error" : ""
              }`}
            >
              <label htmlFor="">Phone</label>
              <input
                type="number"
                name="phone"
                value={form.phone || ""}
                onChange={handleChange}
              />
              <p className="errors">{errors.phone}</p>
            </div>
            <div className="custom-input">
              <label htmlFor="">Message</label>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default App;
