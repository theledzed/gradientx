import { useEffect } from "react";
import styled from "styled-components";

const LinearGradient = styled.div`
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

const RadialGradient = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  height: 100%;
  z-index: 50;
  background:  ${(props) =>
    props.position === "at center center"
      ? `radial-gradient(at center center, ${
          props?.colors?.colorTwoSelected?.rgb ?? ""
        }, ${props?.colors?.colorOneSelected?.rgb ?? ""})`
      : `-webkit-radial-gradient(${props.position}, ${
          props?.colors?.colorTwoSelected?.rgb ?? ""
        }, ${props?.colors?.colorOneSelected?.rgb ?? ""})`};
  width:100%;
}
`;
export default function GradientContainer({
  colors,
  angle,
  getBackGround,
  style,
  position,
  outputFormat,
}) {
  useEffect(() => {
    const style =
      outputFormat === "Hex"
        ? `linear-gradient(${angle}deg, ${
            colors?.colorTwoSelected?.hex ?? ""
          }, ${colors?.colorOneSelected?.hex ?? ""})`
        : `linear-gradient(${angle}deg, ${
            colors?.colorTwoSelected?.rgb ?? ""
          }, ${colors?.colorOneSelected?.rgb ?? ""})`;
    getBackGround(style);
  }, [colors, angle, outputFormat]);
  return (
    <>
      {style === "Radial" && (
        <RadialGradient colors={colors} position={position} />
      )}
      {style === "Linear" && <LinearGradient colors={colors} angle={angle} />}
    </>
  );
}
