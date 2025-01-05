import { FormikErrors, FormikTouched } from "formik";
import type { FormValues } from "../../vendorDetails.types";

interface IInvoiceDetailsComponentProps {
  values: FormValues;
  errors: FormikErrors<FormValues>;
  touched: FormikTouched<FormValues>;
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(
      field: T
    ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
}

export type { IInvoiceDetailsComponentProps };
