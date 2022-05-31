import { useState } from "react";
import Sidebar from "./Sidebar";
import Gradient from "./Gradient";
import styled from "styled-components";
import {
  OUTPUTS_FORMAT,
  RADIAL_POSITIONS,
  GRADIENT_TYPES,
} from "../utils/constants";

const LayoutRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default function Layout() {
  const [colors, setColors] = useState({});
  const [angle, setAngle] = useState(25);
  const [style, setStyle] = useState(GRADIENT_TYPES.LINEAR);
  const [position, setPosition] = useState(RADIAL_POSITIONS.CENTER_CENTER);
  const [backgroundColor, setBackgroundColor] = useState("");
  const [outputFormat, setoutputFormat] = useState(OUTPUTS_FORMAT.HEX);


  return (
    <LayoutRow>
      <Sidebar
        getStyleSelected={(style) => {
          setStyle(style);
        }}
        getColors={(colorOneSelected, colorTwoSelected) => {
          setColors({ colorOneSelected, colorTwoSelected });
        }}
        getAngleSelected={(angle) => {
          setAngle(angle.toString());
        }}
        backgroundColor={backgroundColor}
        getPositionSelected={(position) => {
          setPosition(position);
        }}
        getOutputFormat={(outPutFormat) => {
          setoutputFormat(outPutFormat);
        }}
      />
      <Gradient
        colors={colors}
        angle={angle}
        position={position}
        style={style}
        outputFormat={outputFormat}
        getBackGround={(backgroundColor) => {
          setBackgroundColor(backgroundColor);
        }}
      />
    </LayoutRow>
  );
}
