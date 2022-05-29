import ColorPicker from "../Commons/ColorPicker";
import styled from "styled-components";
import Button from "../Commons/Button";
import { useState, useEffect } from "react";

const ColorsContainer = styled.div`
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

const ColorPickerContainer = styled.div`
  display: flex;
  flex-direciont: row;
`;

export default function ColorsSection({ titleSection, buttonText, getColors }) {
  const [colorSelectedOne, setColorSelectedOne] = useState("");
  const [colorSelectedTwo, setColorSelectedTwo] = useState("");
  const [isRandom, setIsRandom] = useState(false);

  useEffect(() => {
    getColors(colorSelectedOne, colorSelectedTwo);
  }, [colorSelectedOne, colorSelectedTwo]);

  return (
    <ColorsContainer>
      <Label>{titleSection}</Label>
      <ColorPickerContainer>
        <ColorPicker
          getSelectedColor={(color) => {
            setColorSelectedOne(color);
          }}
          isRandom={isRandom}
        />
        <ColorPicker
          getSelectedColor={(color) => {
            setColorSelectedTwo(color);
          }}
          isRandom={isRandom}
        />
        <Button
          buttonText={buttonText}
          onClickButton={() => {
            setIsRandom(!isRandom);
          }}
        />
      </ColorPickerContainer>
    </ColorsContainer>
  );
}
