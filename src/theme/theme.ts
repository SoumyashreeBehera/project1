import { MantineThemeOverride } from "@mantine/core";

const getCustomTheme = (): MantineThemeOverride => ({
  other: {
    screenWidth: 1440,
    navHeight: 56,
    watchlistWidth: 706,
  },
});
export default getCustomTheme;
