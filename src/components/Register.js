import React, {useState} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import AuthService from "../services/auth.service";


const Register = () => {

  const [showForm, setShowForm] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
    },
    //Yup dependency for client-end validation
    validationSchema: Yup.object({
      firstname: Yup.string().required("This field is required!"),
      lastname: Yup.string().required("This field is required!"),
      username: Yup.string().required("This field is required!"),
      email: Yup.string().email("Invalid email address").required("This field is required!"),
      password: Yup.string().required("This field is required!"),
    }),

//set new data when form submits
    onSubmit: (values) => {
      console.log("Registration data:", values);
      const registrationData = {
        firstname: values.firstname,
        lastname: values.lastname,
        username: values.username,
        email: values.email,
        password: values.password,
      };
      console.log(registrationData);
      AuthService.register(
        registrationData.firstname,
        registrationData.lastname,
        registrationData.username,
        registrationData.email,
        registrationData.password
      )
        .then((response) => {
          console.log(response.data);
          setRegistrationSuccess(true);
          setShowForm(false);
        })
        .catch((error) => {
          console.error(error);
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        });
    },
    
  });
  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="registration-container">
           {registrationSuccess ? (
            // display registration Successful message if input is valid
        <div className="success-message">Registration Successful!</div>
      ) : (
        <div className="toggle-form-wrapper">
          <button onClick={handleToggleForm} className="toggle-form-button">
            {showForm ? "Hide" : "Register Now"}
          </button>
        </div>
      )}
    {showForm && (
    <div className="register-modal">
      <div onClick={() => window.location.reload(false)} className="x-btn signup-x">
        &times;
      </div>
      <form className="register-form" onSubmit={formik.handleSubmit}>
        <div className="input-group">
          <i className="fas fa-user"></i>
          <input
            type="text"
            placeholder="firstname"
            className="form-control"
            name="firstname"
            value={formik.values.firstname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstname && formik.errors.firstname ? (
            <div className="alert alert-danger">{formik.errors.firstname}</div>
          ) : null}
        </div>
        <div className="input-group">
          <i className="fas fa-user"></i>
          <input
            type="text"
            placeholder="lastname"
            className="form-control"
            name="lastname"
            value={formik.values.lastname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastname && formik.errors.lastname ? (
            <div className="alert alert-danger">{formik.errors.lastname}</div>
          ) : null}
        </div>
        <div className="input-group">
          <i className="fas fa-user"></i>
          <input
            type="text"
            placeholder="Username"
            className="form-control"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.username && formik.errors.username ? (
            <div className="alert alert-danger">{formik.errors.username}</div>
          ) : null}
        </div>
        <div className="input-group">
          <i className="far fa-envelope"></i>
          <input
            placeholder="Email"
            type="email"
            className="form-control"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="alert alert-danger">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="input-group">
          <i className="fas fa-lock"></i>
          <input
            placeholder="Password"
            type="password"
            className="form-control"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="alert alert-danger">{formik.errors.password}</div>
          ) : null}
        </div>
        <button type="submit" className="submit-btn">REGISTER</button>
      </form>
    </div>
     )}
     </div>
  );
};

export default Register;
