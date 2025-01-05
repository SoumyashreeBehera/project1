import React from "react";
import {
  AppBar,
  LoginForm,
  InvoiceDetails,
  VendorDetails,
  Comments,
} from "./components";
import { Redirect, Route, Switch } from "wouter";
import { Box, createStyles } from "@mantine/core";
import { useIsLoggedIn } from "./hooks";

const checkRedirect = (): (string | false)[] => {
  const params = new URLSearchParams(window.location.search);

  const redirectTarget = params.get("redirect") || false;
  const redirectTargetRoute = params.get("route") || false;
  const redirectTo = "/";

  return [redirectTarget, redirectTo, redirectTargetRoute];
};
const useStyles = createStyles(() => {
  return {
    routeContainer: {
      flex: 1,
    },
    container: {
      minHeight: "100vh",
      minWidth: "100vw",
    },
    routeWrapper: {
      height: "100vh",
      maxWidth: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };
});

const Routes = () => {
  const { classes } = useStyles();
  const { isLoggedIn } = useIsLoggedIn();
  const [redirectTarget] = checkRedirect();

  return (
    <Box className={classes.container}>
      {isLoggedIn ? (
        <Box>
          <AppBar />
          <Box className={classes.routeContainer}>
            <Switch>
              <Route path="/">
                <Redirect
                  to={redirectTarget ? `/${redirectTarget}` : "/vendorDetails"}
                />
              </Route>
              <Route path="/vendorDetails" component={VendorDetails} />
              <Route path="/invoiceDetails" component={InvoiceDetails} />
              <Route path="/comments" component={Comments} />
            </Switch>
          </Box>{" "}
        </Box>
      ) : (
        <Box className={classes.routeWrapper}>
          <Switch>
            <Route path="/" component={LoginForm} />
            <Redirect to="/" />
          </Switch>
        </Box>
      )}
    </Box>
  );
};

export default Routes;
