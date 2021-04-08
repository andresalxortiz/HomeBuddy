import {
  BaseTheme,
  createBox,
  createText,
  createTheme,
} from "@shopify/restyle";

const theme = createTheme({
  colors: {
    primary: "#77AF9C",
    primaryGreen: "#075A51",
    title: "#0C0D34",

    grey: "#0C0D34",
    shade: "#BDC4BC",
    offgrey: "#FAFAFB",

    white: "white",

    button: "#0C0D34",

    transparent: "rgba(12, 13, 52, 0.05)",
  },
  spacing: {
    xxs: 0,
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
    xxl: 65,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 65,
  },
  textVariants: {
    hero: {
      fontSize: 55,
      lineHeight: 90,
      fontFamily: "Iter-Bold-700",
      color: "white",
      textAlign: "center",
      fontWeight: "500",
    },
    title: {
      fontSize: 24,
      fontFamily: "Iter-SemiBold-600",
      color: "grey",
    },
    loginSubheader: {
      fontSize: 16,
      fontFamily: "Iter-Medium-500",
      color: "grey",
    },
    forgetPassword: {
      fontFamily: "Iter-Medium-500",
      fontSize: 14,
      color: "primaryGreen",
    },
    placeHolderColor: {
      color: "offgrey",
    },
    body: {
      fontFamily: "Iter-Medium-500",
      fontSize: 16,
      lineHeight: 20,
      color: "grey",
    },
    button: {
      fontFamily: "Iter-Medium-500",
      fontSize: 15,
      textAlign: "center",
      color: "grey",
    },
  },
  breakpoints: {},
});

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export default theme;
