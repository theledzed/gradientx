import { useState, useEffect } from "react";
import { AnglePicker } from "react-linear-gradient-picker";
import ButtonGroupPositionSection from "./ButtonGroupPositionSection";
import {
  LeftTop,
  Top,
  RightTop,
  Left,
  Center,
  Right,
  LeftBottom,
  Bottom,
  RightBottom,
} from "../Commons/Svgs";
import styled from "styled-components";
import "react-linear-gradient-picker/dist/index.css";

const AlglePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  display: block;
  margin-top: 16px;
  font-weight: 600;
  font-size: 0.8125rem;
  line-height: 1.75rem;
`;

const PickerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  witdh: 100%;
  .ap {
    background: ${(props) => `${props.backgroundColor}`};
  }
`;

export default function DirectionSection({
  titleSection,
  getAngleSelected,
  backgroundColor,
  getPositionSelected,
  styleSelected,
  positionSelected,
}) {
  const [angle, setAngle] = useState(25);
  const [position, setPosition] = useState(positionSelected);
  useEffect(() => {
    getAngleSelected(angle);
  }, [angle]);

  useEffect(() => {
    getPositionSelected(position);
  }, [position]);

  useEffect(() => {
    setPosition(positionSelected);
  }, [positionSelected]);

  return (
    <AlglePickerContainer>
      <Label>{titleSection}</Label>
      {styleSelected === "Linear" && (
        <PickerContainer backgroundColor={backgroundColor}>
       <AnglePicker size={150} snap={1} angle={angle} setAngle={setAngle} />
        </PickerContainer>
      )}
      {styleSelected === "Radial" && (
        <ButtonGroupPositionSection
          onClickButton={(value) => {
            setPosition(value);
          }}
          options={[
            { value: "left top", svg: <LeftTop /> },
            { value: "center top", svg: <Top /> },
            { value: "right top", svg: <RightTop /> },
            { value: "left center", svg: <Left /> },
            { value: "at center center", svg: <Center /> },
            { value: "right center", svg: <Right /> },
            { value: "left bottom", svg: <LeftBottom /> },
            { value: "center bottom", svg: <Bottom /> },
            { value: "right bottom", svg: <RightBottom /> },
          ]}
          valueSelected={position}
        />
      )}
    </AlglePickerContainer>
  );
}
