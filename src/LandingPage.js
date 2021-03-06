import React from "react";
import Styles from "./LandingPage.module.css";
import { Paper } from "@material-ui/core";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
//components
import NextArrow from "./Components/NextArrow";
import LeadIn from "./Components/LeadIn";
import FollowThrough1 from "./Components/FollowThrough1";
import FollowThrough2 from "./Components/FollowThrough2";
import FollowThrough3 from "./Components/FollowThrough3";
import FollowThrough4 from "./Components/FollowThrough4";
import Content1 from "./Components/Content1";
import Content2 from "./Components/Content2";
import Content3 from "./Components/Content3";
import Content4 from "./Components/Content4";
import Logos from "./Components/Logos";

export default function LandingPage() {
  return (
    <div>
      <Parallax pages={4}>
        {/* background images */}
        <ParallaxLayer factor={1} offset={0.5} speed={0}>
          <div className={Styles.bgImage1}></div>
        </ParallaxLayer>
        <ParallaxLayer factor={1} offset={1.5} speed={0}>
          <div className={Styles.bgImage2}></div>
        </ParallaxLayer>
        <ParallaxLayer factor={1} offset={2.5} speed={0}>
          <div className={Styles.bgImage3}></div>
        </ParallaxLayer>
        {/* content panes */}
        <ParallaxLayer factor={0.9} offset={0} speed={0.5}>
          <Paper className={Styles.stretchMe}>
            <Content1 />
            <NextArrow />
          </Paper>
        </ParallaxLayer>
        <ParallaxLayer factor={0.8} offset={1.1} speed={0.5}>
          <Paper className={Styles.stretchMe}>
            <Content2 />
            <NextArrow />
          </Paper>
        </ParallaxLayer>
        <ParallaxLayer factor={0.8} offset={2.1} speed={0.5}>
          <Paper className={Styles.stretchMe}>
            <Content3 />
            <NextArrow />
          </Paper>
        </ParallaxLayer>
        <ParallaxLayer factor={0.9} offset={3.1} speed={0.5}>
          <Paper className={Styles.stretchMe}>
            <Content4 />
          </Paper>
        </ParallaxLayer>
        {/* content info*/}
        <ParallaxLayer factor={1} offset={0.3} speed={2}>
          <LeadIn />
        </ParallaxLayer>
        <ParallaxLayer factor={1} offset={0.6} speed={4}>
          <FollowThrough1 />
        </ParallaxLayer>
        <ParallaxLayer factor={1} offset={1.4} speed={1}>
          <FollowThrough2 />
        </ParallaxLayer>
        <ParallaxLayer factor={1} offset={2.4} speed={1}>
          <FollowThrough3 />
        </ParallaxLayer>
        <ParallaxLayer factor={1} offset={3.2} speed={2}>
          <FollowThrough4 />
        </ParallaxLayer>
        {/* content content (last 3 panels) */}
        <ParallaxLayer factor={1} offset={1.2} speed={2}>
          <Logos />
        </ParallaxLayer>
        <ParallaxLayer factor={1} offset={2.3} speed={2}>
          <h1>Jimmity</h1>
        </ParallaxLayer>
        <ParallaxLayer factor={1} offset={3.3} speed={4}>
          <h1>Jimmity</h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
