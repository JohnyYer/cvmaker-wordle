import { globalStyle } from "@vanilla-extract/css";

globalStyle("body", {
  color: "white",
  background: "linear-gradient(180deg, #212226 0%, #000000 100%)",
  minHeight: "100vh",
  /* mobile viewport bug fix */
  //   minHeight: '-webkit-fill-available',
});
