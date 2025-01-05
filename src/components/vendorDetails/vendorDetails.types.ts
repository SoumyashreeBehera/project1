interface FormValues {
  file: File | null;
  vendor: string;
  purchaseOrderNumber: number | null;
  invoiceNumber: number | null;
  invoiceDate: string;
  totalAmount: number | null;
  paymentTerms: string;
  invoiceDueDate: string;
  gLPostDate: string;
  invoiceDescription: string;
  lineAmount: number | null;
  department: string;
  amount: number | null;
  location: string;
  description: string;
  addAComment: string;
}

export type { FormValues };
