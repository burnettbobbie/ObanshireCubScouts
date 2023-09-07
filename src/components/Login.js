import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import AuthService from "../services/auth.service";

const Login = () => {
  const navigate = useNavigate();

  // Set initial form field values
  const initialValues = {
    username: '',
    password: '',
  };

  // Define form validation schema using Yup
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('This field is required!'),
    password: Yup.string().required('This field is required!'),
  });

  // Handle form submission
  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const { username, password } = values;
      
      // Call AuthService to login with provided username and password
      await AuthService.login(username, password);
      const currentUser = AuthService.getCurrentUser();
  
      // Redirect based on user role
      if (currentUser.roles.indexOf('ROLE_ADMIN') !== -1) {
        console.log("Redirecting to admin");
        navigate('/admin');
      } else {
        console.log("Redirecting to dashboard");
        navigate('/dashboard');
      }
    } catch (error) {
      const resMessage =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
  
      // Set form field error and stop submitting
      setFieldError('password', resMessage);
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="modal">
        {/* Use Formik for form management */}
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form className="form">
              {/* Username field */}
              <div className="input-group">
                <Field type="text" name="username" placeholder="username" />
                <ErrorMessage name="username" component="div" className="alert alert-danger" />
              </div>

              {/* Password field */}
              <div className="input-group">
                <Field type="password" name="password" placeholder="password" />
                <ErrorMessage name="password" component="div" className="alert alert-danger" />
              </div>

              {/* Submit button */}
              <div>
                <button type="submit" disabled={isSubmitting}>
                  {/* Show loading spinner while submitting */}
                  {isSubmitting && <span></span>}
                  <span>Login</span>
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Login;
