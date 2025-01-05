import React, { memo } from "react";
import links from "./links";
import { Link, useLocation } from "wouter";
import { Box, Button, Flex, Group, Header as UiHeader } from "@mantine/core";
import useStyles from "./styles";
import { ArrowLeft } from "tabler-icons-react";

const Header = () => {
  const { classes } = useStyles();
  const [location, setLocation] = useLocation();

  const handleLinkClick = (currentTo: string) => {
    if (currentTo === location) {
      setLocation(location);
    }
  };

  const items = links?.map((link) => (
    <Link
      key={link.label}
      to={link.to}
      className={location !== link.to ? classes.link : classes.linkActive}
      onClick={() => handleLinkClick(link.to)}
    >
      {link.label}
    </Link>
  ));
  const handleLogout = () => {
    localStorage.removeItem("userSession");
    setLocation("/");
  };
  return (
    <UiHeader className={classes.header} height={`${56 / 16}rem`}>
      <div className={classes.headerInner}>
        <Flex className={classes.watchlistHeaderWrapper}>
          <ArrowLeft size={20} />
          <div>Create New Invoice</div>
        </Flex>
        <Box className={classes.inner}>
          <Flex>
            <Group>{items}</Group>
          </Flex>
          <Button onClick={handleLogout}>Log Out</Button>
        </Box>
      </div>
    </UiHeader>
  );
};

export default memo(Header);
