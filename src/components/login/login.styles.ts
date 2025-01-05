import { createStyles } from "@mantine/core";

const useStyles = createStyles(() => {
  return {
    container: {
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      flexWrap: "wrap",
      width: "30vw",
    },
    formContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      width: "100%",
      flex: 1,
    },

    fieldContainer: {
      padding: "8px",
      margin: "4px 0",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    errorMessage: {
      color: "red",
    },
  };
});

export default useStyles;
