import ButtonGroupSection from "./Sections/ButtonGroupSection";
import ColorsSection from "./Sections/ColorsSection"
import DirectionSection from "./Sections/DirectionSection"
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

  color: #3d4853;
  text-transform: uppercase;
  text-decoration: none;
`;

export default function Sidebar({getColors, getAngleSelected, backgroundColor}) {
  return (
    <SideBarContainer>
      <TitleGradientx>CSS Gradient Generator</TitleGradientx>
      <ButtonGroupSection
        titleSection="Style"
        options={[{ value: "Linear" }, { value: "Radial" }]}
      />
      <DirectionSection titleSection="Direction" getAngleSelected={getAngleSelected} backgroundColor={backgroundColor}/>
      <ColorsSection getColors={getColors} titleSection="Colors" buttonText="Random"/>
      <ButtonGroupSection
        titleSection="Output format"
        options={[{ value: "Hex" }, { value: "Rgba" }]}
      />
    </SideBarContainer>
  );
}
