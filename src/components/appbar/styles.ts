import { createStyles, rem } from "@mantine/core";

const useStyles = createStyles((theme) => {
  return {
    header: {
      zIndex: 100,
      boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.1)",
      margin: "0 auto",
      width: "100%",
      padding: "0 20px",
    },
    headerInner: {
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      height: "100%",
    },
    watchlistHeaderWrapper: {
      width: rem(theme.other.watchlistWidth),
      fontWeight: 600,
      height: rem(theme.other.navHeight),
      alignItems: "center",
      gap: 15,
    },
    inner: {
      display: "flex",
      alignItems: "center",
      width: `calc(100% - ${theme.other.watchlistWidth}px)`,
      justifyContent: "space-between",
    },
    link: {
      display: "flex",
      padding: `0 ${rem(10)}`,
      textDecoration: "none",
      cursor: "pointer",
      height: rem(56),
      justifyContent: "center",
      alignItems: "center",
      border: "2px solid transparent",
    },
    linkActive: {
      display: "flex",
      padding: `0 ${rem(10)}`,
      textDecoration: "none",
      cursor: "pointer",
      justifyContent: "center",
      alignItems: "center",
      color: "#1787E0",
      borderBottom: `2px solid grey`,
      "&:hover": {},
    },
  };
});

export default useStyles;
