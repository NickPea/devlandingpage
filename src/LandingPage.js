import React from "react";
import Styles from "./LandingPage.module.css";
import { Paper } from "@material-ui/core";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

export default function LandingPage() {
  return (
    <div>
      <Parallax pages={4}>
        <ParallaxLayer factor={1} offset={0.5} speed={0}>
          <div className={Styles.bgImage1}></div>
        </ParallaxLayer>
        <ParallaxLayer factor={1} offset={1.5} speed={0}>
          <div className={Styles.bgImage2}></div>
        </ParallaxLayer>
        <ParallaxLayer factor={1} offset={2.5} speed={0}>
          <div className={Styles.bgImage3}></div>
        </ParallaxLayer>

        <ParallaxLayer factor={0.9} offset={0} speed={0.5}>
          <Paper className={Styles.stretchMe}>content</Paper>
        </ParallaxLayer>
        <ParallaxLayer factor={0.8} offset={1.1} speed={0.5}>
          <Paper className={Styles.stretchMe}>content</Paper>
        </ParallaxLayer>
        <ParallaxLayer factor={0.8} offset={2.1} speed={0.5}>
          <Paper className={Styles.stretchMe}>content</Paper>
        </ParallaxLayer>
        <ParallaxLayer factor={0.9} offset={3.1} speed={0.5}>
          <Paper className={Styles.stretchMe}>content</Paper>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
