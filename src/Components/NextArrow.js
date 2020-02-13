import React from "react";
import NextArrowIcon from "@material-ui/icons/ExpandMore";

export default function NextArrow() {
  return (
    <div style={posBottom}>
      <NextArrowIcon />
    </div>
  );
}

const posBottom = {
  position: "absolute",
  bottom: "5%",
  left: "50%"
};
