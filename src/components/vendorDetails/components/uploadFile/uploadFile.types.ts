import { FormikErrors, FormikTouched } from "formik";
import { FormValues } from "../../vendorDetails.types";

interface IUploadFileProps {
  errors: FormikErrors<FormValues>;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean
  ) => Promise<void | FormikErrors<FormValues>>;
  touched: FormikTouched<FormValues>;
}

export type { IUploadFileProps };
