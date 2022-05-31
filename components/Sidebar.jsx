import { useState } from "react";
import ButtonGroupSection from "./Sections/ButtonGroupSection";
import ColorsSection from "./Sections/ColorsSection";
import DirectionSection from "./Sections/DirectionSection";
import LargeButton from "./Commons/LargeButton";
import styled from "styled-components";
import {
  OUTPUTS_FORMAT,
  RADIAL_POSITIONS,
  GRADIENT_TYPES,
} from "../utils/constants";
import { SIDEBAR_COPIES } from "../utils/copies";

const SideBarContainer = styled.div`
  top: 0;
  left: 0;
  bottom: 0;
  width: 20%;
  padding: 30px 32px;
  box-shadow: 2px 0 2px 0 rgb(0 0 0 / 15%);
  z-index: 100;
  overflow-y: auto;
  @media (max-width: 768px) {
    width: 100%;
    height: ${(props) => (props.isOpen ? "100vh" : "fit-content")};
    overflow-y: inherit;
    padding: 1em 2em;
  }
`;

const TitleContainer = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
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
  @media (max-width: 768px) {
    font-size: 1rem;
    width: 100%;
    &:hover {
      width: 100%;
    }
  }
`;

const LargeButtonContainer = styled.div`
  margin: 2.5em 0em;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    margin: 1em 0 0;
  }
`;

const CustomButtons = styled.div`
  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "inherit" : "none")};
  }
`;

const BurgerButton = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: inherit;
    padding: 4px 16px;
    margin-top: 4px;
    margin-left: 8px;
    border: 2px solid #f1f4f8;
    border-radius: 6px;
    color: #3d4853;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    font-size: 0.8125rem;
    cursor: pointer;
    height: fit-content;
    background: ${(props) => `${props?.isOpen ? "#fff" : "#f1f4f8"}`};
  }
`;

export default function Sidebar({
  getColors,
  getAngleSelected,
  backgroundColor,
  getPositionSelected,
  getStyleSelected,
  getOutputFormat,
}) {
  const [styleSelected, setStyleSelected] = useState(GRADIENT_TYPES.LINEAR);
  const [outputFormat, setoutputFormat] = useState(OUTPUTS_FORMAT.HEX);
  const [isRandom, setIsRandom] = useState(false);
  const [getCssText, setGetCssText] = useState(SIDEBAR_COPIES.GET_CSS);
  const [shareLinkText, setShareLinkText] = useState(
    SIDEBAR_COPIES.GET_SHARE_LINK
  );
  const [position, setPosition] = useState(RADIAL_POSITIONS.CENTER_CENTER);
  const [colorOptionOne, setColorOptionOne] = useState(null);
  const [colorOptionTwo, setColorOptionTwo] = useState(null);
  const [angle, setAngle] = useState(25);
  const [isOpen, setIsOpen] = useState(false);

  const clipboard = () => {
    const outputStyle = styleSelected.toLowerCase();
    let colorsVars = backgroundColor.split("linear-gradient")[1];
    const deg = colorsVars.split(",")[0].replace("(", "");
    if (styleSelected !== GRADIENT_TYPES.LINEAR) {
      colorsVars = colorsVars.replace(deg, position);
    }
    const background =
      backgroundColor.split(", rgb")[1] || backgroundColor.split(", #")[1];
    const text = `
    background: ${
      outputFormat === OUTPUTS_FORMAT.RGB
        ? `rgb${background}`
        : `#${background}`
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
      styleSelected === GRADIENT_TYPES.RADIAL ? position : angle
    }`;
    navigator.clipboard.writeText(newShareLink);
  };

  return (
    <SideBarContainer>
      <TitleContainer>
        <TitleGradientx
          onClick={() => {
            setIsRandom(!isRandom);
          }}
          backgroundColor={backgroundColor}
        >
          CSS Gradient Generator
        </TitleGradientx>
        <BurgerButton
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          isOpen={isOpen}
        >
          {isOpen ? SIDEBAR_COPIES.CLOSE : SIDEBAR_COPIES.CUSTOMIZE}
        </BurgerButton>
      </TitleContainer>
      <CustomButtons isOpen={isOpen}>
        <ButtonGroupSection
          onClickButton={(value) => {
            setStyleSelected(value);
            getStyleSelected(value);
          }}
          titleSection={SIDEBAR_COPIES.STYLE}
          options={[
            { value: GRADIENT_TYPES.LINEAR },
            { value: GRADIENT_TYPES.RADIAL },
          ]}
          valueSelected={styleSelected}
        />
        <DirectionSection
          styleSelected={styleSelected}
          titleSection={SIDEBAR_COPIES.DIRECTION}
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
          titleSection={SIDEBAR_COPIES.COLORS}
          buttonText={SIDEBAR_COPIES.RANDOM}
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
          titleSection={SIDEBAR_COPIES.OUTPUT_FORMAT}
          options={[
            { value: OUTPUTS_FORMAT.HEX },
            { value: OUTPUTS_FORMAT.RGB },
          ]}
          valueSelected={outputFormat}
        />
      </CustomButtons>
      <LargeButtonContainer>
        <LargeButton
          buttonText={getCssText}
          onClickButton={() => {
            clipboard();
            setGetCssText(SIDEBAR_COPIES.YAY_COPIED);
            setTimeout(() => {
              setGetCssText(SIDEBAR_COPIES.GET_CSS);
            }, 2000);
          }}
        />
        <LargeButton
          buttonText={shareLinkText}
          onClickButton={() => {
            shareLink();
            setShareLinkText(SIDEBAR_COPIES.YAY_COPIED);
            setTimeout(() => {
              setShareLinkText(SIDEBAR_COPIES.GET_SHARE_LINK);
            }, 2000);
          }}
        />
      </LargeButtonContainer>
    </SideBarContainer>
  );
}
