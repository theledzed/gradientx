import { useState, useEffect } from "react";
import ButtonGroupSection from "./Sections/ButtonGroupSection";
import ColorsSection from "./Sections/ColorsSection";
import DirectionSection from "./Sections/DirectionSection";
import LargeButton from "./Commons/LargeButton";
import styled from "styled-components";

const SideBarContainer = styled.div`
  top: 0;
  left: 0;
  bottom: 0;
  width: 20%;
  padding: 30px 32px;
  box-shadow: 2px 0 2px 0 rgb(0 0 0 / 15%);
  z-index: 100;
  overflow-y: auto;
`;

const TitleGradientx = styled.h1`
  font-size: 1.5rem;
  line-height: 1.75rem;
  font-weight: 600;
  width: 1em;
  color: #3d4853;
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.backgroundColor};
    background: ${(props) => props.backgroundColor};
    background: ${(props) => props.backgroundColor};
    background: ${(props) => props.backgroundColor};
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    transition: color 0.2s ease-out;
    width: 6em;
  }
`;

const LargeButtonContainer = styled.div`
  margin: 2.5em 0em;
`;

export default function Sidebar({
  getColors,
  getAngleSelected,
  backgroundColor,
  getPositionSelected,
  getStyleSelected,
  getOutputFormat,
}) {
  const [styleSelected, setStyleSelected] = useState("Linear");
  const [outputFormat, setoutputFormat] = useState("Hex");
  const [isRandom, setIsRandom] = useState(false);
  const [getCssText, setGetCssText] = useState("Get CSS");
  const [shareLinkText, setShareLinkText] = useState("Get Share Link");
  const [position, setPosition] = useState("at center center");
  const [colorOptionOne, setColorOptionOne] = useState(null);
  const [colorOptionTwo, setColorOptionTwo] = useState(null);
  const [angle, setAngle] = useState(25);

  const clipboard = () => {
    const outputStyle = styleSelected.toLowerCase();
    let colorsVars = backgroundColor.split("linear-gradient")[1];
    const deg = colorsVars.split(",")[0].replace("(", "");
    if (styleSelected !== "Linear") {
      colorsVars = colorsVars.replace(deg, position);
    }
    const background =
      backgroundColor.split(", rgb")[1] || backgroundColor.split(", #")[1];
    const text = `
    background: ${
      outputFormat === "Rgb" ? `rgb${background}` : `#${background}`
    };
    background: -webkit-${outputStyle}-gradient${colorsVars};
    background: -moz-${outputStyle}-gradient${colorsVars};
    background: ${outputStyle}-gradient${colorsVars};`;
    navigator.clipboard.writeText(text);
  };

  const shareLink = () => {
    const optionColors = `${colorOptionOne.hex}?=${colorOptionTwo.hex}`;
    const newShareLink = `${
      window.location.origin
    }?=${optionColors}?=${styleSelected}?=${
      styleSelected === "Radial" ? position : angle
    }`;
    navigator.clipboard.writeText(newShareLink);
  };

  return (
    <SideBarContainer>
      <TitleGradientx
        onClick={() => {
          setIsRandom(!isRandom);
        }}
        backgroundColor={backgroundColor}
      >
        CSS Gradient Generator
      </TitleGradientx>
      <ButtonGroupSection
        onClickButton={(value) => {
          setStyleSelected(value);
          getStyleSelected(value);
        }}
        titleSection="Style"
        options={[{ value: "Linear" }, { value: "Radial" }]}
        valueSelected={styleSelected}
      />
      <DirectionSection
        styleSelected={styleSelected}
        titleSection="Direction"
        positionSelected={position}
        angleSelected={angle}
        getAngleSelected={(angle) => {
          setAngle(angle);
          getAngleSelected(angle);
        }}
        backgroundColor={backgroundColor}
        getPositionSelected={(position) => {
          setPosition(position);
          getPositionSelected(position);
        }}
      />
      <ColorsSection
        getColors={(optionOne, optionTwo) => {
          setColorOptionOne(optionOne);
          setColorOptionTwo(optionTwo);
          getColors(optionOne, optionTwo);
        }}
        titleSection="Colors"
        buttonText="Random"
        isRandomCallToAction={isRandom}
        getStyledQuery={(style) => {
          setStyleSelected(style);
          getStyleSelected(style);
        }}
        getPositionQuery={(position) => {
          setPosition(position);
          getPositionSelected(position);
        }}
        getAngleQuery={(angle) => {
          setAngle(angle);
          getAngleSelected(angle);
        }}
      />
      <ButtonGroupSection
        onClickButton={(value) => {
          setoutputFormat(value);
          getOutputFormat(value);
        }}
        titleSection="Output format"
        options={[{ value: "Hex" }, { value: "Rgb" }]}
        valueSelected={outputFormat}
      />
      <LargeButtonContainer>
        <LargeButton
          buttonText={getCssText}
          onClickButton={() => {
            clipboard();
            setGetCssText("Yay! Copied to Clipboard!");
            setTimeout(() => {
              setGetCssText("Get CSS");
            }, 2000);
          }}
        />
        <LargeButton
          buttonText={shareLinkText}
          onClickButton={() => {
            shareLink();
            setShareLinkText("Yay! Copied to Clipboard!");
            setTimeout(() => {
              setShareLinkText("Get Share Link");
            }, 2000);
          }}
        />
      </LargeButtonContainer>
    </SideBarContainer>
  );
}
