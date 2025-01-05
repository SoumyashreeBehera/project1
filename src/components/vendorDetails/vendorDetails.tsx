import React from "react";
import useStyles from "./vendorDetails.styles";
import { Button, Flex } from "@mantine/core";
import { dotsVertical } from "../../assets/icons";
import {
  CommentComponent,
  InvoiceDetailsComponent,
  UploadFile,
  VendorDetailsComponent,
} from "./components";
import { Form, Formik } from "formik";
import type { FormValues } from "./vendorDetails.types";
import { initialValues, validation } from "./utils/validation";

const VendorDetails = () => {
  const { classes } = useStyles();
  const handleSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validate={validation}
    >
      {({
        setFieldValue,
        touched,
        values,
        errors,
        handleChange,
        resetForm,
      }) => {
        return (
          <Form style={{ width: "100%" }}>
            <Flex className={classes.container}>
              <UploadFile
                errors={errors}
                setFieldValue={setFieldValue}
                touched={touched}
              />
              <Flex
                direction={"column"}
                gap={40}
                className={classes.formContainer}
              >
                <VendorDetailsComponent
                  errors={touched.vendor ? errors : {}}
                  handleChange={handleChange}
                  values={values}
                  touched={touched}
                />
                <InvoiceDetailsComponent
                  errors={errors}
                  handleChange={handleChange}
                  values={values}
                  touched={touched}
                />
                <CommentComponent
                  errors={errors}
                  handleChange={handleChange}
                  values={values}
                  touched={touched}
                />

                <Flex className={classes.buttonContainer}>
                  <Flex p={12}>
                    <img src={dotsVertical} alt="dotsVertical" />
                  </Flex>
                  <Button
                    variant="outline"
                    type="reset"
                    color="teal"
                    className={classes.buttonCell}
                    onClick={() => resetForm()}
                  >
                    Save as Draft
                  </Button>
                  <Button
                    type="submit"
                    color="#1787E0"
                    className={classes.buttonCell}
                  >
                    Submit & New
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Form>
        );
      }}
    </Formik>
  );
};

export default VendorDetails;
