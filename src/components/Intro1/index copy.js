import "./styles.css";
import React, { useRef, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import ReactAnime from "react-animejs";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Lottie from "react-lottie";
import animationData from "../../assets/animations/developer.json";

const Intro1 = (props) => {
  const { Anime, stagger } = ReactAnime;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <Controller>
      <div className='vh-100 vw-100 d-flex flex-column align-items-center justify-content-center'>
        <div className='container row'>
          <div className='col-md-8'>
            <div style={{ textJustify: "inter-word", textAlign: "left" }}>
              <Timeline pin>
                <Scene duration={200}>
                  <Tween
                    stagger={0.1}
                    from={{
                      rotationX: -90,
                      ease: "elastic",
                    }}
                    to={{
                      rotationX: 0,
                      ease: "elastic",
                    }}
                  >
                    <h1
                      id='#hiIm'
                      style={{
                        fontWeight: "800",
                        fontSize: "4vw",
                        textShadow: "0px 0px 10px rgba(47,53,66,0.3)",
                      }}
                    >
                      <FormattedMessage id='helloIm' />
                    </h1>
                  </Tween>
                </Scene>

                <Scene duration={100} offset={10}>
                  <Tween
                    from={{
                      scale: 4,
                      opacity: 0,
                    }}
                    to={{
                      scale: 1,
                      opacity: 1,
                    }}
                  >
                    <h1
                      style={{
                        fontWeight: "800",
                        fontSize: "14vw",
                        marginBottom: "-5vw",
                        textShadow: "0px 0px 10px rgba(47,53,66,0.3)",
                        marginLeft: "-0.35vw",
                      }}
                    >
                      Mohsin
                    </h1>
                  </Tween>
                </Scene>

                <Scene duration={100} offset={-90}>
                  <Tween
                    from={{
                      scale: 4,
                      opacity: 0,
                    }}
                    to={{
                      scale: 1,
                      opacity: 1,
                    }}
                  >
                    <h1
                      style={{
                        fontWeight: "800",
                        fontSize: "8vw",
                        textShadow: "0px 0px 10px rgba(47,53,66,0.3)",
                      }}
                    >
                      Kamal Akbar
                    </h1>
                  </Tween>
                </Scene>
              </Timeline>
              <br></br>
              <div
                style={{
                  width: "150px",
                  border: "1px solid #3742fa",
                  borderRadius: "10px",
                  height: "50px",
                }}
              >
                <p>Download CV</p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <Lottie
              options={defaultOptions}
              height={500}
              width={450}
              isStopped={false}
              style={{ marginTop: "-10vh" }}
            />
          </div>
          {/* <div style={{ position: "absolute", right: "8vw", bottom: "-70vh" }}>
            <Lottie
              options={defaultOptions1}
              height={90}
              width={90}
              isStopped={false}
            />
          </div> */}
        </div>
      </div>
    </Controller>
  );
};

export default Intro1;
