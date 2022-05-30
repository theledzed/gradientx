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

  const clipboard = () => {
    const colorsVars = backgroundColor.split("linear-gradient")[1];
    const background =
      backgroundColor.split(", rgb")[1] || backgroundColor.split(", #")[1];
    const text = `
    background: ${
      outputFormat === "Rgb" ? `rgb${background}` : `#${background}`
    };
    background: -webkit-linear-gradient${colorsVars};
    background: -moz-linear-gradient${colorsVars};
    background: linear-gradient${colorsVars};`;
    navigator.clipboard.writeText(text);
  };

  const shareLink = () => {
    const newShareLink = `${
      window.location.origin
    }?=${backgroundColor.replaceAll(" ", "")}?=${styleSelected}`;
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
        getAngleSelected={getAngleSelected}
        backgroundColor={backgroundColor}
        getPositionSelected={getPositionSelected}
      />
      <ColorsSection
        getColors={getColors}
        titleSection="Colors"
        buttonText="Random"
        isRandomCallToAction={isRandom}
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
              setGetCssText("Get Share Link");
            }, 2000);
          }}
        />
      </LargeButtonContainer>
    </SideBarContainer>
  );
}
