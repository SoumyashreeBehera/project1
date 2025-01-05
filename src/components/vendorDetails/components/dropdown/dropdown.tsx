import React, { ComponentType } from "react";
import { IDropdownProps } from "./dropdown.types";
import { Box, Flex } from "@mantine/core";
import useStyles from "./dropdown.styles";

const Dropdown: ComponentType<IDropdownProps> = ({
  title,
  mainKey,
  footer,
  errorText,
  dropdownValue,
  onChange,
  dropdownList,
}) => {
  const { classes } = useStyles();

  return (
    <Box w={"100%"}>
      <Flex direction="column" className={classes.container} gap={8}>
        <label htmlFor={mainKey}>{title}</label>
        <select
          id={mainKey}
          className={classes.dropdownContainer}
          name={mainKey}
          value={dropdownValue}
          onChange={onChange}
        >
          {dropdownList ? (
            <>
              <option value="" label="Select a category" />
              {dropdownList.map((choice) => (
                <option value={choice} label={choice} key={choice} />
              ))}
            </>
          ) : (
            <>
              <option value="" label="Select a category" />
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="employee">Employee</option>
              <option value="founder">Founder</option>
              <option value="other">Other</option>
            </>
          )}
        </select>
        <Box className={classes.errorBox}>{errorText}</Box>
        <Box fz={13}>{footer}</Box>
      </Flex>
    </Box>
  );
};

export default Dropdown;
