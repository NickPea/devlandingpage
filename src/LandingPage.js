import React from "react";
// import Styles from "./LandingPage.module.css";
import { Paper } from "@material-ui/core";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

export default function LandingPage() {
  return (
    <div>
      <Parallax pages={3}>
        <ParallaxLayer factor={1} offset={0} speed={0}>
          <Paper>content</Paper>
        </ParallaxLayer>
        <ParallaxLayer factor={1} offset={1} speed={0}>
          <Paper>content</Paper>
        </ParallaxLayer>
        <ParallaxLayer factor={1} offset={2} speed={0}>
          <Paper>content</Paper>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
