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
  const [angle, setAngle] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  return (
    <LayoutRow>
      <Sidebar
        getColors={(colorOneSelected, colorTwoSelected) => {
          setColors({ colorOneSelected, colorTwoSelected });
        }}
        getAngleSelected={(angle) => {
          setAngle(angle.toString());
        }}
        backgroundColor={backgroundColor}
      />
      <Gradient
        colors={colors}
        angle={angle}
        getBackGround={(backgroundColor) => {
          setBackgroundColor(backgroundColor);
        }}
      />
    </LayoutRow>
  );
}
