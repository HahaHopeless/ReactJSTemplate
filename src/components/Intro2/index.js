import React from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Back } from "gsap/gsap-core";
import { Tween, Timeline } from "react-gsap";

const ListStyled = styled.div``;

const Intro2 = () => (
  <ListStyled>
    <Controller>
      <Scene duration={500} offset={300} pin>
        <Tween
          stagger={0.1}
          from={{
            rotationX: -90,
            transformOrigin: "50% top -100",
          }}
          to={{
            rotationX: 0,
            transformOrigin: "50% bottom 100",
          }}
        >
          <li>Rich Harris</li>
          <li>Dan Abramov</li>
          <li>Kyle Simpson</li>
          <li>Gregory Brown</li>
          <li>Addy Osmani</li>
          <li>Evan You</li>
          <li>Axel Rauschmayer</li>
          <li>Sarah Drasner</li>
          <li>André Staltz</li>
        </Tween>
      </Scene>
    </Controller>
  </ListStyled>
);

export default Intro2;
