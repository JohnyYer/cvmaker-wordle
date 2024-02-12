import { style } from "@vanilla-extract/css";

export const root = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const grid = style({
  gap: 10,
  display: "grid",
  gridTemplateColumns: "repeat(5, auto)",
  marginTop: 160,
});
