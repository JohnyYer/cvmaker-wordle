import { style } from "@vanilla-extract/css";

export const root = style({
  position: "absolute",
  backgroundColor: "#3F3A3A",
  width: 260,
  borderRadius: 10,
  padding: "32px 16px 16px 16px",
  textAlign: "center",
  fontFamily: "SF UI Display",
});

export const heading = style({
  fontSize: 13,
  lineHeight: "16px",
  fontWeight: 600,
  marginTop: 28,
});

export const text = style({
  fontSize: 11,
  fontWeight: 400,
  lineHeight: "14px",
  marginTop: 10,
});

export const icon = style({
  fontSize: 64,
  lineHeight: "64px",
});
