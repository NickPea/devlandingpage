import React from "react";
import BgSVG from "../Assets/bg.svg";

export default function Content1() {
  return <div style={bgImage}></div>;
}

const bgImage = {
  height: "100%",
  background: `url(${BgSVG}) no-repeat -1200px -100px`,
  backgroundSize: "2500px"
};
