import { Box, Flex } from "@mantine/core";
import React, { ComponentType, useRef } from "react";
import { ITextInputProps } from "./textInput.types";

import { createStyles } from "@mantine/core";

const useStyles = createStyles(() => {
  return {
    inputBox: {
      flex: 1,
      background: "transparent",
      border: "none",
      outline: "none",
      appearance: "none",
      height: "100%",
    },
    inputContainer: {
      border: "1px solid #64748B",
      borderRadius: 8,
      flexWrap: "wrap",
      overflow: "hidden",
      height: 40,
      gap: 16,
      alignItems: "center",
      padding: "0px 12px",
      justifyContent: "center",
    },
    errorBox: {
      color: "red",
      fontSize: 12,
      marginTop: -5,
    },
  };
});

const TextInput: ComponentType<ITextInputProps> = ({
  mainKey,
  title,
  inputProps,
  leftIcon,
  rightIcon,
  errorText,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { classes } = useStyles();

  const handleDivClick = () => {
    inputRef.current?.focus();
  };

  return (
    <Flex direction={"column"} gap={8} w={"100%"} onClick={handleDivClick}>
      <label htmlFor={mainKey}>{title}</label>
      <Flex className={classes.inputContainer}>
        {typeof leftIcon === "string" ? (
          <img src={leftIcon} alt={leftIcon} />
        ) : (
          leftIcon
        )}
        <input
          ref={inputRef}
          id={mainKey}
          name={mainKey}
          {...inputProps}
          className={classes.inputBox}
        />
        {typeof rightIcon === "string" ? (
          <img src={rightIcon} alt={rightIcon} />
        ) : (
          rightIcon
        )}
      </Flex>
      <Box className={classes.errorBox}>{errorText}</Box>
    </Flex>
  );
};

export default TextInput;
