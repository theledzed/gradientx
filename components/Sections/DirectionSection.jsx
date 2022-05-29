import { useState, useEffect } from "react";
import { AnglePicker } from "react-linear-gradient-picker";
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
}) {
  const [angle, setAngle] = useState(25);
  useEffect(() => {
    getAngleSelected(angle);
  }, [angle]);

  return (
    <AlglePickerContainer>
      <Label>{titleSection}</Label>
      <PickerContainer backgroundColor={backgroundColor}>
        <AnglePicker size={150} snap={1} angle={angle} setAngle={setAngle} />
      </PickerContainer>
    </AlglePickerContainer>
  );
}
