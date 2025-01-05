import { Box, Button, Flex } from "@mantine/core";
import React, { useRef } from "react";
import useStyles from "./vendorDetails.styles";
import {
  fileSearch,
  calendarDate,
  chevronDown,
  comment,
  dotsVertical,
  invoice,
  send,
  upload,
  vendorLogo,
} from "../../assets/icons";

import { Dropdown, HeaderBox, TextInput } from "./components";
import { Form, Formik } from "formik";
import type { FormValues } from "./vendorDetails.types";
import {
  purchaseOrderNumbers,
  initialValues,
  validation,
} from "./utils/validation";

const VendorDetails = () => {
  const { classes } = useStyles();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: any) => void
  ) => {
    const file = event.target.files?.[0];
    setFieldValue("file", file);
  };

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
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        resetForm,
      }) => {
        console.log(errors, "errors");
        return (
          <Form style={{ width: "100%" }}>
            <Flex className={classes.container}>
              <Box className={classes.invoiceContainer}>
                <Box className={classes.invoiceBox}>
                  <Box className={classes.textBox}>
                    <div className={classes.header}>Upload Your Invoice</div>
                    <div>To auto-populate fields and save time</div>
                  </Box>
                  <img src={fileSearch} alt="link" />
                  <Flex
                    align="center"
                    gap={8}
                    className={classes.fileButton}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Box>Upload File</Box>
                    <img
                      src={upload}
                      alt="link"
                      style={{ width: 15, height: 15 }}
                    />
                    <input
                      type="file"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      accept="application/pdf"
                      onChange={(event) =>
                        handleFileChange(event, setFieldValue)
                      }
                    />
                  </Flex>
                  {errors.file && touched.file && errors.file ? (
                    <Box className={classes.errorBox}>{errors.file}</Box>
                  ) : null}
                  <div>Click to upload</div>
                </Box>
              </Box>
              <Flex
                direction={"column"}
                gap={40}
                className={classes.formContainer}
              >
                <Flex direction="column" gap={32}>
                  <HeaderBox icon={vendorLogo} title="Vendor Details" />
                  <Flex direction="column" gap={24}>
                    <Box className={classes.subTitle}>Vendor Information</Box>
                    <Dropdown
                      mainKey="vendor"
                      title="Vendor *"
                      footer="550 Main St., Lynn"
                      dropdownValue={values.vendor}
                      onChange={handleChange}
                      errorText={errors.vendor}
                    />
                  </Flex>
                </Flex>

                <Flex direction="column" gap={32}>
                  <HeaderBox icon={invoice} title="Invoice Details" />
                  <Flex direction="column" gap={24}>
                    <Box className={classes.subTitle}>General Information</Box>
                    <Dropdown
                      mainKey="purchaseOrderNumber"
                      title="Purchase Order Number *"
                      dropdownValue={values.purchaseOrderNumber || ""}
                      onChange={handleChange}
                      dropdownList={purchaseOrderNumbers}
                      errorText={errors.purchaseOrderNumber}
                    />
                  </Flex>

                  <Flex direction="column" gap={24}>
                    <div>Invoice Details</div>
                    <Flex direction={"column"} gap={16}>
                      <Flex gap={20}>
                        <TextInput
                          title="Invoice Number*"
                          mainKey="invoiceNumber"
                          errorText={errors.invoiceNumber}
                          inputProps={{
                            type: "number",
                            value: values.invoiceNumber || "",
                            onChange: handleChange,
                          }}
                        />
                        <TextInput
                          title="Invoice Date*"
                          mainKey="invoiceDate"
                          errorText={errors.invoiceDate}
                          inputProps={{
                            type: "date",
                            value: values.invoiceDate,
                            onChange: handleChange,
                          }}
                          leftIcon={calendarDate}
                          rightIcon={chevronDown}
                        />
                      </Flex>
                      <Flex
                        gap={20}
                        align={"center"}
                        justify={"center"}
                        w={"100%"}
                      >
                        <TextInput
                          title="Total Amount*"
                          mainKey="totalAmount"
                          errorText={errors.totalAmount}
                          inputProps={{
                            type: "number",
                            value: values.totalAmount || "",
                            onChange: handleChange,
                          }}
                          leftIcon={
                            <Flex
                              px={12}
                              bg={"#E7EAEE"}
                              h={"100%"}
                              align={"center"}
                              ml={-12}
                            >
                              $
                            </Flex>
                          }
                        />
                        <Dropdown
                          mainKey="paymentTerms"
                          title="Payment Terms *"
                          errorText={errors.paymentTerms}
                          dropdownValue={values.paymentTerms}
                          onChange={handleChange}
                        />
                      </Flex>
                      <Flex gap={20} align={"center"} justify={"center"}>
                        <TextInput
                          title="Invoice Due Date*"
                          mainKey="invoiceDueDate"
                          errorText={errors.invoiceDueDate}
                          inputProps={{
                            type: "date",
                            value: values.invoiceDueDate,
                            onChange: handleChange,
                          }}
                          leftIcon={calendarDate}
                          rightIcon={chevronDown}
                        />
                        <TextInput
                          title="GL Post Date *"
                          mainKey="gLPostDate"
                          errorText={errors.gLPostDate}
                          inputProps={{
                            type: "date",
                            value: values.gLPostDate,
                            onChange: handleChange,
                          }}
                          leftIcon={calendarDate}
                          rightIcon={chevronDown}
                        />
                      </Flex>
                      <TextInput
                        title="Invoice Description *"
                        mainKey="invoiceDescription"
                        errorText={errors.invoiceDescription}
                        inputProps={{
                          type: "text",
                          value: values.invoiceDescription,
                          onChange: handleChange,
                        }}
                      />
                    </Flex>
                  </Flex>
                  <Flex direction={"column"} gap={24}>
                    <Box className={classes.subTitle}>Expense Details</Box>
                    <Flex direction={"column"} gap={16}>
                      <Flex gap={20}>
                        <TextInput
                          title="Line Amount*"
                          mainKey="lineAmount"
                          errorText={errors.lineAmount}
                          inputProps={{
                            type: "number",
                            placeholder: "0.00",
                            value: values.lineAmount || "",
                            onChange: handleChange,
                          }}
                          leftIcon={
                            <Flex
                              px={12}
                              bg={"#E7EAEE"}
                              h={"100%"}
                              align={"center"}
                              ml={-12}
                            >
                              $
                            </Flex>
                          }
                          rightIcon={<Box>USD</Box>}
                        />
                        <Dropdown
                          mainKey="department"
                          title="Department *"
                          errorText={errors.department}
                          dropdownValue={values.department}
                          onChange={handleChange}
                        />
                      </Flex>
                      <Flex gap={20}>
                        <Dropdown
                          mainKey="amount"
                          title="Amount *"
                          dropdownValue={values.amount || ""}
                          onChange={handleChange}
                          errorText={errors.amount}
                        />
                        <Dropdown
                          mainKey="location"
                          title="Location *"
                          dropdownValue={values.location}
                          onChange={handleChange}
                          errorText={errors.location}
                        />
                      </Flex>
                      <TextInput
                        title="Description*"
                        mainKey="description"
                        errorText={errors.description}
                        inputProps={{
                          type: "text",
                          value: values.description,
                          onChange: handleChange,
                        }}
                      />
                    </Flex>
                  </Flex>
                </Flex>
                <Flex direction={"column"} gap={32}>
                  <HeaderBox icon={comment} title="Comments" />
                  <TextInput
                    mainKey="addAComment"
                    errorText={errors.addAComment}
                    inputProps={{
                      type: "text",
                      placeholder: "Add A Comment",
                      value: values.addAComment,
                      onChange: handleChange,
                    }}
                    rightIcon={send}
                  />
                </Flex>
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
