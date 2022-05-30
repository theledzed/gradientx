import Sidebar from "./Sidebar";
import { useState } from "react";
import Gradient from "./Gradient";
import styled from "styled-components";

const LayoutRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

export default function Layout() {
  const [colors, setColors] = useState({});
  const [angle, setAngle] = useState(25);
  const [style, setStyle] = useState("Linear");
  const [position, setPosition] = useState("at center center");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [outputFormat, setoutputFormat] = useState("Hex");


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
