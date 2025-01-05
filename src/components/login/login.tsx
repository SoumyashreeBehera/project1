import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import useStyles from "./login.styles";
import { Button, Flex } from "@mantine/core";
import { ILoginFormValues } from "./login.types";
import { useLocation } from "wouter";

const initialValues: ILoginFormValues = {
  username: "",
  password: "",
};

const LoginForm = () => {
  const { classes } = useStyles();
  const [, setLocation] = useLocation();

  const validate = (values: ILoginFormValues) => {
    const errors: { username?: string; password?: string } = {};

    if (!values.username) {
      errors.username = "Username is required.";
    }

    if (!values.password) {
      errors.password = "Password is required.";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }

    return errors;
  };

  const handleLogin = (values: ILoginFormValues) => {
    const userSession = { username: values.username, timestamp: Date.now() };
    localStorage.setItem("userSession", JSON.stringify(userSession));
    setLocation("/vendorDetails");
  };

  return (
    <Flex direction={"column"}>
      <Flex direction={"column"} className={classes.container}>
        <h3>Login Form</h3>
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={handleLogin}
        >
          {() => (
            <Form className={classes.formContainer}>
              <Flex direction={"column"}>
                <label htmlFor="username">Username</label>
                <Field
                  type="text"
                  name="username"
                  id="username"
                  className={classes.fieldContainer}
                />
                <ErrorMessage
                  name="username"
                  component="p"
                  className={classes.errorMessage}
                />
              </Flex>

              <Flex direction={"column"}>
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className={classes.fieldContainer}
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className={classes.errorMessage}
                />
              </Flex>

              <Button type="submit" p={10}>
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </Flex>
    </Flex>
  );
};

export default LoginForm;
