import { InputHTMLAttributes, ReactNode } from "react";

interface ITextInputProps {
  title?: string;
  mainKey: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  leftIcon?: string | ReactNode;
  rightIcon?: string | ReactNode;
  errorText?: string;
}

export type { ITextInputProps };
