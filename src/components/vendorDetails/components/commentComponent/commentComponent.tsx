import { Flex } from "@mantine/core";
import React from "react";
import HeaderBox from "../headerBox/headerBox";
import TextInput from "../textInput/textInput";
import { comment, send } from "../../../../assets/icons";
import { ICommentComponentProps } from "./commentComponent.types";

const CommentComponent: React.FC<ICommentComponentProps> = ({
  errors,
  handleChange,
  touched,
  values,
}) => {
  return (
    <Flex direction={"column"} gap={32}>
      <HeaderBox icon={comment} title="Comments" />
      <TextInput
        mainKey="addAComment"
        errorText={
          errors.addAComment && touched.addAComment ? errors.addAComment : ""
        }
        inputProps={{
          type: "text",
          placeholder: "Add A Comment",
          value: values.addAComment,
          onChange: handleChange,
        }}
        rightIcon={send}
      />
    </Flex>
  );
};

export default CommentComponent;
