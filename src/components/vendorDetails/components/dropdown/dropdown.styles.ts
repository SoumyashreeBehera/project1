import { createStyles, rem } from "@mantine/core";

const useStyles = createStyles((theme) => {
  const { colors } = theme.other;

  return {
    container: {
      width: "100%",
    },
    dropdownContainer: {
      height: 40,
      padding: 12,
      border: "1px solid #64748B",
      borderRadius: 8,
    },
    errorBox: {
      color: "red",
      fontSize: 12,
      marginTop: -5,
    },
  };
});

export default useStyles;
