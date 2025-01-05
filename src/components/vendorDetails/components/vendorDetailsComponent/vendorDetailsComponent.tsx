import { Box, Flex } from "@mantine/core";
import React from "react";
import HeaderBox from "../headerBox/headerBox";
import { vendorLogo } from "../../../../assets/icons";
import Dropdown from "../dropdown/dropdown";
import { IVendorDetailsComponentProps } from "./vendorDetailsComponent.types";
import useStyles from "./vendorDetailsComponent.styles";

const VendorDetailsComponent: React.FC<IVendorDetailsComponentProps> = ({
  handleChange,
  values,
  errors,
  touched,
}) => {
  const { classes } = useStyles();
  return (
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
          errorText={errors.vendor && touched.vendor ? errors.vendor : ""}
        />
      </Flex>
    </Flex>
  );
};

export default VendorDetailsComponent;
