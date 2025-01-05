import { Box, Flex } from "@mantine/core";
import React from "react";
import HeaderBox from "../headerBox/headerBox";
import { calendarDate, chevronDown, invoice } from "../../../../assets/icons";
import Dropdown from "../dropdown/dropdown";
import TextInput from "../textInput/textInput";
import useStyles from "./invoiceDetailsComponent.styles";
import { IInvoiceDetailsComponentProps } from "./invoiceDetailsComponent.types";
import { purchaseOrderNumbers } from "../../utils/validation";

const InvoiceDetailsComponent: React.FC<IInvoiceDetailsComponentProps> = ({
  values,
  errors,
  handleChange,
  touched,
}) => {
  const { classes } = useStyles();
  return (
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
          errorText={
            errors.purchaseOrderNumber && touched.purchaseOrderNumber
              ? errors.purchaseOrderNumber
              : ""
          }
        />
      </Flex>

      <Flex direction="column" gap={24}>
        <div>Invoice Details</div>
        <Flex direction={"column"} gap={16}>
          <Flex gap={20}>
            <TextInput
              title="Invoice Number*"
              mainKey="invoiceNumber"
              errorText={
                errors.invoiceNumber && touched.invoiceNumber
                  ? errors.invoiceNumber
                  : ""
              }
              inputProps={{
                type: "number",
                value: values.invoiceNumber || "",
                onChange: handleChange,
              }}
            />
            <TextInput
              title="Invoice Date*"
              mainKey="invoiceDate"
              errorText={
                errors.invoiceDate && touched.invoiceDate
                  ? errors.invoiceDate
                  : ""
              }
              inputProps={{
                type: "date",
                value: values.invoiceDate,
                onChange: handleChange,
              }}
              leftIcon={calendarDate}
              rightIcon={chevronDown}
            />
          </Flex>
          <Flex gap={20} align={"center"} justify={"center"} w={"100%"}>
            <TextInput
              title="Total Amount*"
              mainKey="totalAmount"
              errorText={
                errors.totalAmount && touched.totalAmount
                  ? errors.totalAmount
                  : ""
              }
              inputProps={{
                type: "number",
                value: values.totalAmount || "",
                onChange: handleChange,
              }}
              leftIcon={<Flex className={classes.dollarIconBox}>$</Flex>}
            />
            <Dropdown
              mainKey="paymentTerms"
              title="Payment Terms *"
              errorText={
                errors.paymentTerms && touched.paymentTerms
                  ? errors.paymentTerms
                  : ""
              }
              dropdownValue={values.paymentTerms}
              onChange={handleChange}
            />
          </Flex>
          <Flex gap={20} align={"center"} justify={"center"}>
            <TextInput
              title="Invoice Due Date*"
              mainKey="invoiceDueDate"
              errorText={
                errors.invoiceDueDate && touched.invoiceDueDate
                  ? errors.invoiceDueDate
                  : ""
              }
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
              errorText={
                errors.gLPostDate && touched.gLPostDate ? errors.gLPostDate : ""
              }
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
            errorText={
              errors.invoiceDescription && touched.invoiceDescription
                ? errors.invoiceDescription
                : ""
            }
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
              errorText={
                errors.lineAmount && touched.lineAmount ? errors.lineAmount : ""
              }
              inputProps={{
                type: "number",
                placeholder: "0.00",
                value: values.lineAmount || "",
                onChange: handleChange,
              }}
              leftIcon={<Flex className={classes.dollarIconBox}>$</Flex>}
              rightIcon={<Box>USD</Box>}
            />
            <Dropdown
              mainKey="department"
              errorText={
                errors.department && touched.department ? errors.department : ""
              }
              title="Department *"
              dropdownValue={values.department}
              onChange={handleChange}
            />
          </Flex>
          <Flex gap={20}>
            <Dropdown
              mainKey="amount"
              title="Amount *"
              dropdownValue={values.amount || ""}
              errorText={errors.amount && touched.amount ? errors.amount : ""}
              onChange={handleChange}
            />
            <Dropdown
              mainKey="location"
              title="Location *"
              dropdownValue={values.location}
              errorText={
                errors.location && touched.location ? errors.location : ""
              }
              onChange={handleChange}
            />
          </Flex>
          <TextInput
            title="Description*"
            errorText={
              errors.description && touched.description
                ? errors.description
                : ""
            }
            mainKey="description"
            inputProps={{
              type: "text",
              value: values.description,
              onChange: handleChange,
            }}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default InvoiceDetailsComponent;
