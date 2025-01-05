import type { FormValues } from "../vendorDetails.types";

const purchaseOrderNumbers = [1232, 3453, 1345, 6547];

const initialValues: FormValues = {
  file: null,
  vendor: "",
  purchaseOrderNumber: null,
  invoiceNumber: null,
  invoiceDate: "",
  totalAmount: null,
  paymentTerms: "",
  invoiceDueDate: "",
  gLPostDate: "",
  invoiceDescription: "",
  lineAmount: null,
  department: "",
  amount: null,
  location: "",
  description: "",
  addAComment: "",
};

interface FormErrorValues {
  file?: string | null;
  vendor?: string;
  purchaseOrderNumber?: string;
  invoiceNumber?: string;
  invoiceDate?: string;
  totalAmount?: string;
  paymentTerms?: string;
  invoiceDueDate?: string;
  gLPostDate?: string;
  invoiceDescription?: string;
  lineAmount?: string;
  department?: string;
  amount?: string;
  location?: string;
  description?: string;
  addAComment?: string;
}
const validation = (values) => {
  const errors: FormErrorValues = {
    file: null,
    vendor: "",
    purchaseOrderNumber: "",
    invoiceNumber: "",
    invoiceDate: "",
    totalAmount: "",
    paymentTerms: "",
    invoiceDueDate: "",
    gLPostDate: "",
    invoiceDescription: "",
    lineAmount: "",
    department: "",
    amount: "",
    location: "",
    description: "",
    addAComment: "",
  };

  if (!values.file) {
    errors.file = "Required";
  } else if (!values.vendor) {
    errors.vendor = "Required";
  } else if (!values.purchaseOrderNumber) {
    errors.purchaseOrderNumber = "Required";
  } else if (!values.invoiceNumber) {
    errors.invoiceNumber = "Required";
  } else if (!values.invoiceDate) {
    errors.invoiceDate = "Required";
  } else if (!values.totalAmount) {
    errors.totalAmount = "Required";
  } else if (!values.paymentTerms) {
    errors.paymentTerms = "Required";
  } else if (!values.invoiceDueDate) {
    errors.invoiceDueDate = "Required";
  } else if (!values.gLPostDate) {
    errors.gLPostDate = "Required";
  } else if (!values.invoiceDescription) {
    errors.invoiceDescription = "Required";
  } else if (!values.lineAmount) {
    errors.lineAmount = "Required";
  } else if (!values.department) {
    errors.department = "Required";
  } else if (!values.amount) {
    errors.amount = "Required";
  } else if (!values.location) {
    errors.location = "Required";
  } else if (!values.description) {
    errors.description = "Required";
  } else if (!values.addAComment) {
    errors.addAComment = "Required";
  }
  return errors;
};

export { validation, purchaseOrderNumbers, initialValues };
