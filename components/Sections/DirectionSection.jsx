/* eslint-disable react-hooks/exhaustive-deps */
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
import { RADIAL_POSITIONS, GRADIENT_TYPES } from "../../utils/constants";

const AnglePickerContainer = styled.div`
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
  angleSelected,
}) {
  const [angle, setAngle] = useState(angleSelected);
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

  useEffect(() => {
    setAngle(angleSelected);
  }, [angleSelected]);

  return (
    <AnglePickerContainer>
      <Label>{titleSection}</Label>
      {styleSelected === GRADIENT_TYPES.LINEAR && (
        <PickerContainer backgroundColor={backgroundColor}>
          <AnglePicker
            size={150}
            snap={1}
            angle={angle}
            setAngle={(angle) => {
              setAngle(angle);
            }}
          />
        </PickerContainer>
      )}
      {styleSelected === GRADIENT_TYPES.RADIAL && (
        <ButtonGroupPositionSection
          onClickButton={(value) => {
            setPosition(value);
          }}
          options={[
            { value: RADIAL_POSITIONS.LEFT_TOP, svg: <LeftTop /> },
            { value: RADIAL_POSITIONS.CENTER_TOP, svg: <Top /> },
            { value: RADIAL_POSITIONS.RIGHT_TOP, svg: <RightTop /> },
            { value: RADIAL_POSITIONS.LEFT_CENTER, svg: <Left /> },
            { value: RADIAL_POSITIONS.CENTER_CENTER, svg: <Center /> },
            { value: RADIAL_POSITIONS.RIGHT_CENTER, svg: <Right /> },
            { value: RADIAL_POSITIONS.LEFT_BOTTOM, svg: <LeftBottom /> },
            { value: RADIAL_POSITIONS.CENTER_BOTTOM, svg: <Bottom /> },
            { value: RADIAL_POSITIONS.RIGHT_BOTTOM, svg: <RightBottom /> },
          ]}
          valueSelected={position}
        />
      )}
    </AnglePickerContainer>
  );
}
