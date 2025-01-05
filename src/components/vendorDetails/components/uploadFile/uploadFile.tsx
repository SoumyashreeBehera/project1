import React, { useRef } from "react";
import { Box, Flex } from "@mantine/core";
import useStyles from "./uploadFile.styles";
import { fileSearch, upload } from "../../../../assets/icons";
import type { IUploadFileProps } from "./uploadFile.types";

const UploadFile: React.FC<IUploadFileProps> = ({
  errors,
  setFieldValue,
  touched,
}) => {
  const { classes } = useStyles();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: any) => void
  ) => {
    const file = event.target.files?.[0];
    setFieldValue("file", file);
  };

  return (
    <Box className={classes.invoiceContainer}>
      <Box className={classes.invoiceBox}>
        <Box className={classes.textBox}>
          <div className={classes.header}>Upload Your Invoice</div>
          <div>To auto-populate fields and save time</div>
        </Box>
        <img src={fileSearch} alt="fileSearch" />
        <Flex
          align="center"
          gap={8}
          className={classes.fileButton}
          onClick={() => fileInputRef.current?.click()}
        >
          <Box>Upload File</Box>
          <img src={upload} alt="upload" style={{ width: 15, height: 15 }} />
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            accept="application/pdf"
            onChange={(event) => handleFileChange(event, setFieldValue)}
          />
        </Flex>
        {errors.file && touched.file ? (
          <Box className={classes.errorBox}>{errors.file}</Box>
        ) : null}
        <div>Click to upload</div>
      </Box>
    </Box>
  );
};

export default UploadFile;
