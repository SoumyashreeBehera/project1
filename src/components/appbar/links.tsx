interface LinksData {
  label: string;
  to: string;
}

const links: Array<LinksData> = [
  {
    label: "Vendor Details",
    to: "/vendorDetails",
  },
  {
    label: "Invoice Details",
    to: "/invoiceDetails",
  },
  {
    label: "Comments",
    to: "/comments",
  },
];
export default links;
