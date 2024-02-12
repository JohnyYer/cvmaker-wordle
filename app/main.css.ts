import { globalStyle } from "@vanilla-extract/css";

globalStyle("body, html", {
  color: "white",
  background: "linear-gradient(180deg, #212226 0%, #000000 100%)",
  height: "100vh",
});

globalStyle("html", {
  backgroundColor: "black",
});
