import React, { ComponentType } from "react";
import { IHeaderBoxProps } from "./headerBox.types";
import { Flex } from "@mantine/core";

const HeaderBox: ComponentType<IHeaderBoxProps> = ({ icon, title }) => {
  return (
    <Flex align="center" gap={16}>
      <img src={icon} alt={icon} />
      <div style={{ fontSize: 24, fontWeight: 600 }}>{title}</div>
    </Flex>
  );
};

export default HeaderBox;
