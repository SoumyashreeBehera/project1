import { createStyles, rem } from "@mantine/core";

const useStyles = createStyles((theme) => {
  return {
    invoiceContainer: {
      width: rem(theme.other.watchlistWidth),
      padding: "0 20px",
    },
    invoiceBox: {
      display: "flex",
      width: "100%",
      border: "dashed #64748B",
      height: 844,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 16,
      borderRadius: 8,
    },
    fileButton: {
      padding: "12px 20px",
      border: "1px solid #64748B",
      borderColor: "black",
      borderRadius: 8,
      cursor: "pointer",
    },
    textBox: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 18,
    },
    header: {
      fontSize: 20,
      fontWeight: "bold",
    },
    formHeader: {
      padding: "12px 20px",
      border: "1px solid #64748B",
      borderColor: "black",
      borderRadius: 8,
    },
    vendorDetails: {
      gap: 32,
    },
    buttonContainer: {
      gap: 24,
      padding: "16px 20px",
      border: "1px solid #E7EAEE",
      borderRadius: 8,
    },
    buttonCell: {
      flex: 1,
    },
    errorBox: {
      color: "red",
      fontSize: 12,
      marginTop: -5,
    },
    subTitle: {
      fontSize: 20,
      fontWeight: 600,
    },
  };
});

export default useStyles;
