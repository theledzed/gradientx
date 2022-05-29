import { useEffect } from "react";
import styled from "styled-components";

const Gradient = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  height: 100%;
  z-index: 50;
  background:  ${(props) =>
    `linear-gradient(${props.angle}deg, ${
      props?.colors?.colorTwoSelected?.rgb ?? ""
    }, ${props?.colors?.colorOneSelected?.rgb ?? ""})`};
  width:100%;
}
`;
export default function GradientContainer({ colors, angle, getBackGround }) {
  useEffect(() => {
    getBackGround(
      `linear-gradient(${angle}deg, ${colors?.colorTwoSelected?.rgb ?? ""}, ${
        colors?.colorOneSelected?.rgb ?? ""
      })`
    );
  }, [colors, angle]);
  return <Gradient colors={colors} angle={angle} />;
}
