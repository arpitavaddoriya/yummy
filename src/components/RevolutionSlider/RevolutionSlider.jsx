import React from "react";
import "./RevolutionSlider.css";

const RevolutionSlider = () => {
  return (
    <div
      className="rev_slider_wrapper fullwidthbanner-container"
      data-alias="slider1"
      data-source="gallery"
    >
      <div className="rev_slider fullwidthabanner" data-version="5.4.8.1">
        <ul>
          <li
            data-index="rs-1"
            data-transition="fadetoleftfadefromright,fadefromright,slotslide-horizontal"
            data-slotamount="default"
            data-hideafterloop="0"
            data-hideslideonmobile="off"
            data-easein="default"
            data-easeout="default"
            data-masterspeed="default"
            data-rotate="0"
            data-saveperformance="off"
            data-title="Slide"
            data-param1=""
            data-param2=""
            data-param3=""
            data-param4=""
            data-param5=""
            data-param6=""
            data-param7=""
            data-param8=""
            data-param9=""
            data-param10=""
            data-description=""
          >
            {/* MAIN IMAGE */}
            <img
              src="./src/assets/6cbea-bg1.jpg"
              alt="Slide background"
              className="rev-slidebg"
              data-bgposition="center center"
              data-bgfit="cover"
              data-bgrepeat="no-repeat"
              data-no-retina
            />
            <div
              className="tp-caption tp-resizeme"
              id="slide-1-layer-5"
              style={{
                zIndex: 5,
              }}
              data-x="800"
              data-y="172"
              data-width={["none", "none", "none", "none"]}
              data-height={["none", "none", "none", "none"]}
              data-type="image"
              data-responsive_offset="on"
              data-frames='[{"delay":470,"speed":1500,"frame":"0","from":"x:right;rZ:90deg;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"+7030","speed":1500,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
              data-textalign={["inherit", "inherit", "inherit", "inherit"]}
              data-paddingtop={[0, 0, 0, 0]}
              data-paddingright={[0, 0, 0, 0]}
              data-paddingbottom={[0, 0, 0, 0]}
              data-paddingleft={[0, 0, 0, 0]}
            >
              <img
                src="src/assets/71681-small5.png"
                alt=""
                data-ww="1039px"
                data-hh="770px"
                data-no-retina
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RevolutionSlider;
