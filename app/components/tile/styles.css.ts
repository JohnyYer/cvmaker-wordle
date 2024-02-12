import { style } from "@vanilla-extract/css";

export const root = style({
  color: "white",
  outline: "2px solid #3A3A3C",
  borderRadius: 4,
  width: 60,
  height: 60,
  fontSize: 32,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textTransform: "uppercase",
});

export const match = style({
  border: "none",
  backgroundColor: "#538D4E",
});

export const exists = style({
  border: "none",
  backgroundColor: "#BEA11F",
});

export const miss = style({
  border: "none",
  backgroundColor: "#3A3A3C",
});
