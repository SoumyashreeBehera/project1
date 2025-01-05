import { ChangeEvent } from "react";

interface IDropdownProps {
  title: string;
  mainKey: string;
  footer?: string;
  errorText?: string;
  dropdownValue: string | number;
  dropdownList?: String[] | Number[];
  onChange: {
    (e: ChangeEvent<any>): void;
    <T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any>
      ? void
      : (e: string | ChangeEvent<any>) => void;
  };
}
export type { IDropdownProps };
