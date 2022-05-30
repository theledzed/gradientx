import { useState, useEffect } from "react";
import ButtonGroupSection from "./Sections/ButtonGroupSection";
import ColorsSection from "./Sections/ColorsSection";
import DirectionSection from "./Sections/DirectionSection";
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

export default function Sidebar({
  getColors,
  getAngleSelected,
  backgroundColor,
  getPositionSelected,
  getStyleSelected,
}) {
  const [styleSelected, setStyleSelected] = useState("Linear");
  const [ouputFormat, setOuputFormat] = useState("Hex");
  const [isRandom, setIsRandom] = useState(false);
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
          setOuputFormat(value);
        }}
        titleSection="Output format"
        options={[{ value: "Hex" }, { value: "Rgba" }]}
        valueSelected={ouputFormat}
      />
    </SideBarContainer>
  );
}
